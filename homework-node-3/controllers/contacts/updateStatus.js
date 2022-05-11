const { Contact } = require("../../models/contact");

async function updateStatus(req, res) {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    const error = new Error(`Product with id=${contactId} not found`);
    error.status = 404;
  }
  res.json({
    status: "200",
    data: {
      result,
    },
  });
}
module.exports = updateStatus;