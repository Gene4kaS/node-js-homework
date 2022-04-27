const createError = require("http-errors");

const contacts = require("../../models/contacts");
const { contactSchema } = require("../../schemas");

const addContact = async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      throw new createError(400, error.message);
    }
    const { name, email, phone } = req.body;
    const result = await contacts.add(name, email, phone);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
