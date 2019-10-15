const auth = (req, res, next) => {
  if (
    req.session &&
    req.session.user &&
    req.session.user.email === "harvie5@msn.com"
  ) {
    next();
  } else {
    next(new Error("401"));
  }
};

export { auth };
