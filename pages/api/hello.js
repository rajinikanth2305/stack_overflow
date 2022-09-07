module.exports = (req, res) => {
  const { name = "World" } = req.query;

  /// I will call your api to store whateever status

  res.status(200).send(`Hello ${name}  Recieved!`);

  return; // SSR rendering
};
