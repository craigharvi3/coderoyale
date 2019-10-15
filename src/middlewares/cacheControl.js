import config from "config";

export default () => (req, res, next) => {
  const user = req.session && req.session.user;
  // if user is signed out cache page
  if (!user) {
    res.set("Cache-Control", config.get("cacheControl.publicLongCache"));
  }

  // set default cache
  const cacheHeader = res.getHeader("Cache-Control");
  if (!cacheHeader) {
    res.set("Cache-Control", config.get("cacheControl.default"));
  }

  next();
};
