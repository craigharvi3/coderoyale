import config from "config";

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
      res.locals.message =
        "Sorry, you're not allowed to view this. Don't take it personally.";
      break;
    default:
      status = 500;
      res.locals.title = "Internal Server Error";
      res.locals.message =
        "Something has gone pretty wrong here, but don't worry, we'll look into it.";
  }

  res.set("Cache-Control", config.get("cacheControl.error"));
  res.status(status).render("error", { layout: false });
};

export default error;
