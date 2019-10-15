const status = (_, res) => {
  res.status(200).json({ status: "ok" });
};

export default status;
