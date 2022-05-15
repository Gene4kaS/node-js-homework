const { Contact } = require("../../models/contact");

async function updateStatus(req, res) {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!result) {
    const error = new Error(`Product with id=${id} not found`);
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
