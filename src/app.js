import config from "config";
import express from "express";
import exphbs from "express-handlebars";
import serveStatic from "serve-static";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import session from "express-session";
import notFound from "./controllers/notFound";
import error from "./controllers/error";
import status from "./controllers/status";
import home from "./controllers/home";
import cacheControl from "./middlewares/cacheControl";
import sportsradar from "./utils/sportsradar";

const app = express();
const MongoStore = require("connect-mongo")(session);

app.use(cookieParser());

// setup middleware for post requests
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

const sesh = {
  secret: "coderoyale",
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ url: config.get("mongo.url") }),
  cookie: { domain: "localhost" }
};

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sesh.cookie.secure = true; // serve secure cookies
  sesh.cookie.domain = ".coderoyale.com";
}

app.use(session(sesh));

// setup the engine using express handlebars
app.engine(
  "hbs",
  exphbs({
    extname: "hbs"
  })
);
app.set("view engine", "hbs");

/*
 * This condition will be evaluated at build time by Webpack
 * and only the content of the active branch will appear in the
 */
if (process.env.NODE_ENV === "development") {
  app.set("views", "src/views");
} else {
  app.set("views", `${config.get("root")}dist/views`);
}

const staticAssetsOptions = {
  maxage: 86400000,
  setHeaders: (res, filePath) => {
    if (serveStatic.mime.lookup(filePath).startsWith("image/")) {
      res.setHeader("Cache-Control", "public, max-age=15552000, immutable");
    }
  }
};

if (process.env.NODE_ENV === "production") {
  app.use(
    "/assets",
    express.static(`${config.get("root")}assets`, staticAssetsOptions)
  );
  app.use(
    "/robots.txt",
    express.static(`${config.get("root")}public/robots.txt`)
  );
  app.use(
    "/sitemap.xml",
    express.static(`${config.get("root")}public/sitemap.xml`)
  );
} else {
  app.use("/assets", express.static("assets"));
  app.use("/robots.txt", express.static(`public/robots.txt`));
  app.use("/sitemap.xml", express.static(`public/sitemap.xml`));
}

// hides the header that exposes Express as a server
app.disable("x-powered-by");

app.use("*", cacheControl());

app.get("/", home);
app.get("/api", (req, res) => {
  sportsradar()
    .get("/competitions.json")
    .then(response => {
      res.send(response);
    })
    .catch(err => res.status(500).send(err));
});
app.get("/status", status);
app.get("/logout", (req, res) => {
  delete req.session.user;
  res.redirect("/");
});

app.get("*", notFound);
app.use(error);

export default app;
