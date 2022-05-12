const { Contact } = require("../../models/contact");

async function removeContact(req, res, next) {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw new createError(404, "Not found");
  }
  res.json({
    status: 200,
    message: "contact deleted",
    data: result,
  });
}

module.exports = removeContact;
