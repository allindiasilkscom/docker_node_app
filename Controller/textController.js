 const textController = (req, res) => {
  res.status(200).send({
    success: true,
    message: "router working fine welcoime",
  });
};

module.exports = {textController}