const { Contact } = require("../../models/contact");

async function updateContact(req, res) {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!result) {
    const error = new Error("Not found");
    error.status = 404;
  }
  res.json({
    status: "200",
    data: {
      result,
    },
  });
}

module.exports = updateContact;
