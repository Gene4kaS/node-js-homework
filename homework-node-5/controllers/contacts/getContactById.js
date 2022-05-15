const { Contact } = require("../../models/contact");

async function getContactById(req, res) {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    const error = new Error("Not found");
    error.status = 404;
    throw error;
  }
  res.json({
    status: 200,
    data: {
      result,
    },
  });
}

module.exports = getContactById;
