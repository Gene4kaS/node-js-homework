const contacts = require("../../models/contacts");

const removeContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contacts.removeContact(id);
    if (!result) {
      throw new createError(404, "Not found");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = removeContact;
