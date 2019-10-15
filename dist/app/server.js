module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ "config");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express_handlebars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-handlebars */ "express-handlebars");
/* harmony import */ var express_handlebars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_handlebars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var serve_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! serve-static */ "serve-static");
/* harmony import */ var serve_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(serve_static__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express-session */ "express-session");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _controllers_notFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllers/notFound */ "./src/controllers/notFound.js");
/* harmony import */ var _controllers_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controllers/error */ "./src/controllers/error.js");
/* harmony import */ var _controllers_status__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controllers/status */ "./src/controllers/status.js");
/* harmony import */ var _controllers_home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controllers/home */ "./src/controllers/home.jsx");
/* harmony import */ var _middlewares_cacheControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./middlewares/cacheControl */ "./src/middlewares/cacheControl.js");
/* harmony import */ var _utils_sportsradar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/sportsradar */ "./src/utils/sportsradar.js");













const app = express__WEBPACK_IMPORTED_MODULE_1___default()();

const MongoStore = __webpack_require__(/*! connect-mongo */ "connect-mongo")(express_session__WEBPACK_IMPORTED_MODULE_6___default.a);

app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_4___default()()); // setup middleware for post requests

app.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.urlencoded({
  extended: true
}));
app.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json());
const sesh = {
  secret: "coderoyale",
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    url: config__WEBPACK_IMPORTED_MODULE_0___default.a.get("mongo.url")
  }),
  cookie: {
    domain: "localhost"
  }
};

if (false) {}

app.use(express_session__WEBPACK_IMPORTED_MODULE_6___default()(sesh)); // setup the engine using express handlebars

app.engine("hbs", express_handlebars__WEBPACK_IMPORTED_MODULE_2___default()({
  extname: "hbs"
}));
app.set("view engine", "hbs");
/*
 * This condition will be evaluated at build time by Webpack
 * and only the content of the active branch will appear in the
 */

if (true) {
  app.set("views", "src/views");
} else {}

const staticAssetsOptions = {
  maxage: 86400000,
  setHeaders: (res, filePath) => {
    if (serve_static__WEBPACK_IMPORTED_MODULE_3___default.a.mime.lookup(filePath).startsWith("image/")) {
      res.setHeader("Cache-Control", "public, max-age=15552000, immutable");
    }
  }
};

if (false) {} else {
  app.use("/assets", express__WEBPACK_IMPORTED_MODULE_1___default.a.static("assets"));
  app.use("/robots.txt", express__WEBPACK_IMPORTED_MODULE_1___default.a.static(`public/robots.txt`));
  app.use("/sitemap.xml", express__WEBPACK_IMPORTED_MODULE_1___default.a.static(`public/sitemap.xml`));
} // hides the header that exposes Express as a server


app.disable("x-powered-by");
app.use("*", Object(_middlewares_cacheControl__WEBPACK_IMPORTED_MODULE_11__["default"])());
app.get("/", _controllers_home__WEBPACK_IMPORTED_MODULE_10__["default"]);
app.get("/api", (req, res) => {
  Object(_utils_sportsradar__WEBPACK_IMPORTED_MODULE_12__["default"])().get("/competitions.json").then(response => {
    res.send(response);
  }).catch(err => res.status(500).send(err));
});
app.get("/status", _controllers_status__WEBPACK_IMPORTED_MODULE_9__["default"]);
app.get("/logout", (req, res) => {
  delete req.session.user;
  res.redirect("/");
});
app.get("*", _controllers_notFound__WEBPACK_IMPORTED_MODULE_7__["default"]);
app.use(_controllers_error__WEBPACK_IMPORTED_MODULE_8__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/controllers/error.js":
/*!**********************************!*\
  !*** ./src/controllers/error.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ "config");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);


const error = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  console.log("error", err);
  let status;

  switch (err.message) {
    case "404":
      status = 404;
      res.locals.title = "Page Not Found";
      res.locals.message = "Wooohh there. Are you lost?";
      break;

    case "401":
      status = 401;
      res.locals.title = "Unauthorized";
      res.locals.message = "Sorry, you're not allowed to view this. Don't take it personally.";
      break;

    default:
      status = 500;
      res.locals.title = "Internal Server Error";
      res.locals.message = "Something has gone pretty wrong here, but don't worry, we'll look into it.";
  }

  res.set("Cache-Control", config__WEBPACK_IMPORTED_MODULE_0___default.a.get("cacheControl.error"));
  res.status(status).render("error", {
    layout: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (error);

/***/ }),

/***/ "./src/controllers/home.jsx":
/*!**********************************!*\
  !*** ./src/controllers/home.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "core-js/modules/es.promise");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ "config");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/App */ "./src/layouts/App.jsx");
/* harmony import */ var _utils_serverRender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/serverRender */ "./src/utils/serverRender.js");


/* eslint-disable no-underscore-dangle */







const home = async (req, res, next) => {
  try {
    const initialState = {};
    const store = Object(_store__WEBPACK_IMPORTED_MODULE_4__["configureStore"])(initialState);
    const reactBody = await Object(_utils_serverRender__WEBPACK_IMPORTED_MODULE_6__["default"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: store
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layouts_App__WEBPACK_IMPORTED_MODULE_5__["default"], {
      page: "home"
    })));
    const preloadedState = JSON.stringify(store.getState()).replace(/</g, "\\u003c");
    const preloadedProps = JSON.stringify({
      page: "home"
    });
    const meta = {
      title: "Code Royale",
      description: "All the best bits from your favourite podcasts. Save snippets to listen to later, subscribe to your favourite podcasts and get fresh recommendations every day.",
      siteName: "Code Royale",
      type: "website",
      url: `https://${req.get("host")}${req.originalUrl}`
    };
    res.status(200).render("home", {
      layout: false,
      isProduction: config__WEBPACK_IMPORTED_MODULE_1___default.a.get("environment") === "production",
      preloadedState,
      preloadedProps,
      meta,
      reactBody
    });
  } catch (err) {
    console.log(err);
    return next(new Error("500"));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (home);

/***/ }),

/***/ "./src/controllers/notFound.js":
/*!*************************************!*\
  !*** ./src/controllers/notFound.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "core-js/modules/es.promise");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ "config");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_1__);



const notFound = async (_, res) => {
  res.set("Cache-Control", config__WEBPACK_IMPORTED_MODULE_1___default.a.get("cacheControl.error"));
  res.locals.title = "Page Not Found";
  res.locals.message = "Wooohh there. Are you lost?";
  res.status(404).render("error", {
    layout: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (notFound);

/***/ }),

/***/ "./src/controllers/status.js":
/*!***********************************!*\
  !*** ./src/controllers/status.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const status = (_, res) => {
  res.status(200).json({
    status: "ok"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (status);

/***/ }),

/***/ "./src/layouts/App.jsx":
/*!*****************************!*\
  !*** ./src/layouts/App.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_socket_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/socket.client */ "./src/utils/socket.client.js");



/**
 * This is the entry point layout component
 *
 * @param {object} props
 */

const App = () => {
  var socket = Object(_utils_socket_client__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    inverted: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    as: "a",
    className: "gs-u-p+",
    header: true
  }, "CodeRoyale"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    item: true,
    simple: true,
    text: "@craigharvie"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, null, "Settings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, null, "Log out")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    text: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h1"
  }, "Enter the maze")));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/middlewares/cacheControl.js":
/*!*****************************************!*\
  !*** ./src/middlewares/cacheControl.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ "config");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (() => (req, res, next) => {
  const user = req.session && req.session.user; // if user is signed out cache page

  if (!user) {
    res.set("Cache-Control", config__WEBPACK_IMPORTED_MODULE_0___default.a.get("cacheControl.publicLongCache"));
  } // set default cache


  const cacheHeader = res.getHeader("Cache-Control");

  if (!cacheHeader) {
    res.set("Cache-Control", config__WEBPACK_IMPORTED_MODULE_0___default.a.get("cacheControl.default"));
  }

  next();
});

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ "config");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cluster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cluster */ "cluster");
/* harmony import */ var cluster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cluster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _utils_socket_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/socket.server */ "./src/utils/socket.server.js");






const logger = console;
const port = 8080;
const isClusteringEnabled = config__WEBPACK_IMPORTED_MODULE_0___default.a.get("clustering") === "on";
const cpuCount = Object(os__WEBPACK_IMPORTED_MODULE_2__["cpus"])().length;

const onExit = (worker, code, signal) => {
  let message;

  if (signal) {
    message = `Worker ${worker.process.pid} was killed by signal ${signal}`;
  } else if (code !== 0) {
    message = `Worker ${worker.process.pid} exited with error code ${code}`;
  } else {
    message = `Worker ${worker.process.pid} exited with no error`;
  }

  message = `${message}. Forking a new one.`;
  logger.error(message);
  _app__WEBPACK_IMPORTED_MODULE_4__["default"].locals.monitoring.batchMetricData("dead-workers-count", 1);
  cluster__WEBPACK_IMPORTED_MODULE_1___default.a.fork();
};

const startSever = () => {
  if (isClusteringEnabled && cpuCount > 1 && cluster__WEBPACK_IMPORTED_MODULE_1___default.a.isMaster) {
    logger.info("Process started");

    for (let i = 0; i < cpuCount; i++) {
      logger.info("Forking a new worker");
      cluster__WEBPACK_IMPORTED_MODULE_1___default.a.fork();
    } // Listen for dying workers and create a new one


    cluster__WEBPACK_IMPORTED_MODULE_1___default.a.on("exit", onExit);
  } else {
    // Create a MongoDB connection pool and start the application
    // after the database connection is ready
    mongodb__WEBPACK_IMPORTED_MODULE_3__["MongoClient"].connect(config__WEBPACK_IMPORTED_MODULE_0___default.a.get("mongo.connect_url"), (mongoErr, client) => {
      if (mongoErr) {
        console.error(`Failed to connect to the database. ${mongoErr.stack}`, mongoErr);
        return;
      }

      const db = client.db(config__WEBPACK_IMPORTED_MODULE_0___default.a.get("mongo.db"));
      _app__WEBPACK_IMPORTED_MODULE_4__["default"].locals.db = db;
      const server = _app__WEBPACK_IMPORTED_MODULE_4__["default"].listen(port, err => {
        if (err) {
          console.log(err);
          return;
        }

        console.log(`app is listening at http://localhost:${port}`);
      }); // setup socket.io

      Object(_utils_socket_server__WEBPACK_IMPORTED_MODULE_5__["default"])(server);
    });
  }
};

startSever();

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: configureStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/store/reducers/index.js");




function configureStore(preloadedState = {}) {
  const middlewares = Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], preloadedState, middlewares);
}

/***/ }),

/***/ "./src/store/reducers/collections.js":
/*!*******************************************!*\
  !*** ./src/store/reducers/collections.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return collections; });
const initialState = [];
function collections(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _podcasts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./podcasts */ "./src/store/reducers/podcasts.js");
/* harmony import */ var _snippets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snippets */ "./src/store/reducers/snippets.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/store/reducers/user.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui */ "./src/store/reducers/ui.js");
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collections */ "./src/store/reducers/collections.js");






/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  podcasts: _podcasts__WEBPACK_IMPORTED_MODULE_1__["default"],
  snippets: _snippets__WEBPACK_IMPORTED_MODULE_2__["default"],
  user: _user__WEBPACK_IMPORTED_MODULE_3__["default"],
  ui: _ui__WEBPACK_IMPORTED_MODULE_4__["default"],
  collections: _collections__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

/***/ }),

/***/ "./src/store/reducers/podcasts.js":
/*!****************************************!*\
  !*** ./src/store/reducers/podcasts.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return podcasts; });
const initialState = {
  byId: {},
  allIds: []
};
function podcasts(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/store/reducers/snippets.js":
/*!****************************************!*\
  !*** ./src/store/reducers/snippets.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return snippets; });
const initialState = {
  byId: {},
  allIds: []
};
function snippets(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/store/reducers/ui.js":
/*!**********************************!*\
  !*** ./src/store/reducers/ui.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ui; });
const initialState = {
  activeNavItem: "discover"
};
function ui(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/store/reducers/user.js":
/*!************************************!*\
  !*** ./src/store/reducers/user.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return user; });
const initialState = {
  profile: null,
  subscriptions: []
};

const findSubscriptionIndex = (subscriptions, userId, podcastId) => {
  return subscriptions.findIndex(sub => sub.userId === userId && sub.podcastId === podcastId);
};

function user(state = initialState, action) {
  switch (action.type) {
    case "USER_REMOVE_SUBSCRIPTION":
      {
        const subscriptionIndex = findSubscriptionIndex(state.subscriptions, action.userId, action.podcastId);
        const subs = state.subscriptions.slice(0);
        subs.splice(subscriptionIndex, 1);
        return { ...state,
          subscriptions: subs
        };
      }

    case "USER_ADD_SUBSCRIPTION":
      {
        const subs = state.subscriptions.slice(0);
        subs.push({
          userId: action.userId,
          podcastId: action.podcastId
        });
        return { ...state,
          subscriptions: subs
        };
      }

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/utils/serverRender.js":
/*!***********************************!*\
  !*** ./src/utils/serverRender.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "core-js/modules/es.promise");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);



const render = component => {
  return new Promise((resolve, reject) => {
    const body = [];
    const bodyStream = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToNodeStream"])(component);
    bodyStream.on("data", chunk => {
      body.push(chunk.toString());
    });
    bodyStream.on("error", err => {
      reject(err);
    });
    bodyStream.on("end", () => {
      resolve(body.join(""));
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ }),

/***/ "./src/utils/socket.client.js":
/*!************************************!*\
  !*** ./src/utils/socket.client.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// eslint-disable-next-line import/no-extraneous-dependencies
const io = __webpack_require__(/*! socket.io-client */ "socket.io-client");

const logger = console;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const socket = io.connect();

  function registerHandler(onMessageReceived) {
    socket.on("message", onMessageReceived);
  }

  function unregisterHandler() {
    socket.off("message");
  }

  socket.on("error", err => {
    logger.log("received socket error:");
    logger.log(err);
  });

  function register(name, cb) {
    socket.emit("register", name, cb);
  }

  function join(chatroomName, cb) {
    socket.emit("join", chatroomName, cb);
  }

  function leave(chatroomName, cb) {
    socket.emit("leave", chatroomName, cb);
  }

  function message(chatroomName, msg, cb) {
    socket.emit("message", {
      chatroomName,
      message: msg
    }, cb);
  }

  function getChatrooms(cb) {
    socket.emit("chatrooms", null, cb);
  }

  function getAvailableUsers(cb) {
    socket.emit("availableUsers", null, cb);
  }

  return {
    register,
    join,
    leave,
    message,
    getChatrooms,
    getAvailableUsers,
    registerHandler,
    unregisterHandler
  };
});

/***/ }),

/***/ "./src/utils/socket.client.manager.js":
/*!********************************************!*\
  !*** ./src/utils/socket.client.manager.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const userTemplates = [{
  name: "Rick",
  lastName: "Grimes",
  statusText: "I am the leader!",
  image: "users/rick.jpg"
}, {
  name: "Daryl",
  lastName: "Dixon",
  statusText: "I like smashing Walkers.",
  image: "users/daryl.jpg"
}, {
  name: "Carol",
  lastName: "Peletier",
  statusText: "Don't mess with me!",
  image: "users/carol.jpg"
}, {
  name: "Negan",
  lastName: "",
  statusText: "In a relationship with Lucille.",
  image: "users/negan.jpeg"
}];
/* harmony default export */ __webpack_exports__["default"] = (() => {
  // mapping of all connected clients
  const clients = new Map();

  function addClient(client) {
    clients.set(client.id, {
      client
    });
  }

  function registerClient(client, user) {
    clients.set(client.id, {
      client,
      user
    });
  }

  function removeClient(client) {
    clients.delete(client.id);
  }

  function getAvailableUsers() {
    const usersTaken = new Set(Array.from(clients.values()).filter(c => c.user).map(c => c.user.name));
    return userTemplates.filter(u => !usersTaken.has(u.name));
  }

  function isUserAvailable(userName) {
    return getAvailableUsers().some(u => u.name === userName);
  }

  function getUserByName(userName) {
    return userTemplates.find(u => u.name === userName);
  }

  function getUserByClientId(clientId) {
    return (clients.get(clientId) || {}).user;
  }

  return {
    addClient,
    registerClient,
    removeClient,
    getAvailableUsers,
    isUserAvailable,
    getUserByName,
    getUserByClientId
  };
});

/***/ }),

/***/ "./src/utils/socket.handlers.js":
/*!**************************************!*\
  !*** ./src/utils/socket.handlers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "core-js/modules/es.promise");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);


function makeHandleEvent(client, clientManager, chatroomManager) {
  function ensureExists(getter, rejectionMessage) {
    return new Promise((resolve, reject) => {
      const res = getter();
      return res ? resolve(res) : reject(rejectionMessage);
    });
  }

  function ensureUserSelected(clientId) {
    return ensureExists(() => clientManager.getUserByClientId(clientId), "select user first");
  }

  function ensureValidChatroom(chatroomName) {
    return ensureExists(() => chatroomManager.getChatroomByName(chatroomName), `invalid chatroom name: ${chatroomName}`);
  }

  function ensureValidChatroomAndUserSelected(chatroomName) {
    return Promise.all([ensureValidChatroom(chatroomName), ensureUserSelected(client.id)]).then(([chatroom, user]) => Promise.resolve({
      chatroom,
      user
    }));
  }

  function handleEvent(chatroomName, createEntry) {
    return ensureValidChatroomAndUserSelected(chatroomName).then(({
      chatroom,
      user
    }) => {
      // append event to chat history
      const entry = {
        user,
        ...createEntry()
      };
      chatroom.addEntry(entry); // notify other clients in chatroom

      chatroom.broadcastMessage({
        chat: chatroomName,
        ...entry
      });
      return chatroom;
    });
  }

  return handleEvent;
}

/* harmony default export */ __webpack_exports__["default"] = ((client, clientManager, chatroomManager) => {
  const handleEvent = makeHandleEvent(client, clientManager, chatroomManager);

  function handleRegister(userName, callback) {
    if (!clientManager.isUserAvailable(userName)) return callback("user is not available");
    const user = clientManager.getUserByName(userName);
    clientManager.registerClient(client, user);
    return callback(null, user);
  }

  function handleJoin(chatroomName, callback) {
    const createEntry = () => ({
      event: `joined ${chatroomName}`
    });

    handleEvent(chatroomName, createEntry).then(chatroom => {
      // add member to chatroom
      chatroom.addUser(client); // send chat history to client

      callback(null, chatroom.getChatHistory());
    }).catch(callback);
  }

  function handleLeave(chatroomName, callback) {
    const createEntry = () => ({
      event: `left ${chatroomName}`
    });

    handleEvent(chatroomName, createEntry).then(chatroom => {
      // remove member from chatroom
      chatroom.removeUser(client.id);
      callback(null);
    }).catch(callback);
  }

  function handleMessage({
    chatroomName,
    message
  } = {}, callback) {
    const createEntry = () => ({
      message
    });

    handleEvent(chatroomName, createEntry).then(() => callback(null)).catch(callback);
  }

  function handleGetChatrooms(_, callback) {
    return callback(null, chatroomManager.serializeChatrooms());
  }

  function handleGetAvailableUsers(_, callback) {
    return callback(null, clientManager.getAvailableUsers());
  }

  function handleDisconnect() {
    // remove user profile
    clientManager.removeClient(client); // remove member from all chatrooms

    chatroomManager.removeClient(client);
  }

  return {
    handleRegister,
    handleJoin,
    handleLeave,
    handleMessage,
    handleGetChatrooms,
    handleGetAvailableUsers,
    handleDisconnect
  };
});

/***/ }),

/***/ "./src/utils/socket.room.js":
/*!**********************************!*\
  !*** ./src/utils/socket.room.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  name,
  image
}) => {
  const members = new Map();
  let chatHistory = [];

  function broadcastMessage(message) {
    members.forEach(m => m.emit("message", message));
  }

  function addEntry(entry) {
    chatHistory = chatHistory.concat(entry);
  }

  function getChatHistory() {
    return chatHistory.slice();
  }

  function addUser(client) {
    members.set(client.id, client);
  }

  function removeUser(client) {
    members.delete(client.id);
  }

  function serialize() {
    return {
      name,
      image,
      numMembers: members.size
    };
  }

  return {
    broadcastMessage,
    addEntry,
    getChatHistory,
    addUser,
    removeUser,
    serialize
  };
});

/***/ }),

/***/ "./src/utils/socket.room.manager.js":
/*!******************************************!*\
  !*** ./src/utils/socket.room.manager.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _socket_room__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket.room */ "./src/utils/socket.room.js");

const chatroomTemplates = [{
  name: "Terminus",
  image: "chatrooms/terminus.jpg"
}, {
  name: "Alexandria",
  image: "chatrooms/alexandria.jpg"
}, {
  name: "Sanctuary",
  image: "chatrooms/sanctuary.jpg"
}, {
  name: "Hilltop",
  image: "chatrooms/hilltop.jpg"
}];
/* harmony default export */ __webpack_exports__["default"] = (() => {
  // mapping of all available chatrooms
  const chatrooms = new Map(chatroomTemplates.map(c => [c.name, Object(_socket_room__WEBPACK_IMPORTED_MODULE_0__["default"])(c)]));

  function removeClient(client) {
    chatrooms.forEach(c => c.removeUser(client));
  }

  function getChatroomByName(chatroomName) {
    return chatrooms.get(chatroomName);
  }

  function serializeChatrooms() {
    return Array.from(chatrooms.values()).map(c => c.serialize());
  }

  return {
    removeClient,
    getChatroomByName,
    serializeChatrooms
  };
});

/***/ }),

/***/ "./src/utils/socket.server.js":
/*!************************************!*\
  !*** ./src/utils/socket.server.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _socket_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket.handlers */ "./src/utils/socket.handlers.js");
/* harmony import */ var _socket_client_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.client.manager */ "./src/utils/socket.client.manager.js");
/* harmony import */ var _socket_room_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.room.manager */ "./src/utils/socket.room.manager.js");



const clientManager = Object(_socket_client_manager__WEBPACK_IMPORTED_MODULE_1__["default"])();
const chatroomManager = Object(_socket_room_manager__WEBPACK_IMPORTED_MODULE_2__["default"])();
const logger = console;
/* harmony default export */ __webpack_exports__["default"] = (server => {
  const io = __webpack_require__(/*! socket.io */ "socket.io")(server);

  io.on("connection", client => {
    const {
      handleRegister,
      handleJoin,
      handleLeave,
      handleMessage,
      handleGetChatrooms,
      handleGetAvailableUsers,
      handleDisconnect
    } = Object(_socket_handlers__WEBPACK_IMPORTED_MODULE_0__["default"])(client, clientManager, chatroomManager);
    logger.log("client connected", client.id);
    client.on("register", handleRegister);
    client.on("join", handleJoin);
    client.on("leave", handleLeave);
    client.on("message", handleMessage);
    client.on("chatrooms", handleGetChatrooms);
    client.on("availableUsers", handleGetAvailableUsers);
    client.on("disconnect", () => {
      logger.log("client disconnect...", client.id);
      handleDisconnect();
    });
    client.on("error", err => {
      logger.log("received error from client:", client.id);
      logger.log(err);
    });
  });
});

/***/ }),

/***/ "./src/utils/sportsradar.js":
/*!**********************************!*\
  !*** ./src/utils/sportsradar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ "config");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: `https://api.sportradar.us/ufc/${config__WEBPACK_IMPORTED_MODULE_1___default.a.get("sportsradar.accessLevel")}/v2/en`,
    timeout: 2000,
    headers: {
      "api-key": config__WEBPACK_IMPORTED_MODULE_1___default.a.get("sportsradar.apiKey")
    },
    params: {
      api_key: config__WEBPACK_IMPORTED_MODULE_1___default.a.get("sportsradar.apiKey")
    }
  });
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cluster":
/*!**************************!*\
  !*** external "cluster" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cluster");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("config");

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "core-js/modules/es.promise":
/*!*********************************************!*\
  !*** external "core-js/modules/es.promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.promise");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-handlebars":
/*!*************************************!*\
  !*** external "express-handlebars" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-handlebars");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "serve-static":
/*!*******************************!*\
  !*** external "serve-static" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serve-static");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });