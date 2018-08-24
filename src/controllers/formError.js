exports.get = (req, res) => {
  const { type } = req.params;
  let errorMsg = "";
  if (type == 'pw') {
    errorMsg = "Password incorrect"
  } else if (type == 'un') {
    errorMsg = "Username not found. Please note usernames are case sensitive"
  }
  res.render("formError", { message: errorMsg });
};