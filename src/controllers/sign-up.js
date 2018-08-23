exports.get = (req, res) => {
  res.render("sign-up", { activePage: { 'sign-up': true } });
};
