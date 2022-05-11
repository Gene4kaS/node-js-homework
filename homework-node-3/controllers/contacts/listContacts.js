const { Contact } = require("../../models/contact");

async function listContacts(req, res) {
  const contacts = await Contact.find({});
  res.json({
    status: "success",
    code: 200,
    data: {
      contacts,
    },
  });
}

module.exports = listContacts;
