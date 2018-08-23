exports.get = (req, res) => {
  const {topic} = req.params;
  res.render("topic", {topic: topic});
};
