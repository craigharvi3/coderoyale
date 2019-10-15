const uploadMiddleware = (req, res, next) => {
  next(upload.single("image"));
};

export { uploadMiddleware };
