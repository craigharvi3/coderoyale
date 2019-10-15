import config from "config";

const notFound = async (_, res) => {
  res.set("Cache-Control", config.get("cacheControl.error"));
  res.locals.title = "Page Not Found";
  res.locals.message = "Wooohh there. Are you lost?";
  res.status(404).render("error", { layout: false });
};

export default notFound;
