const express = require("express");

const ctrl = require("../../controllers/contacts");
const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { joiSchema, statusJoiSchema } = require("../../models/contact");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.listContacts));

router.get("/:id", ctrlWrapper(ctrl.getContactById));

router.post("/", auth, validation(joiSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:id", ctrlWrapper(ctrl.removeContact));

router.put("/:id", validation(joiSchema), ctrlWrapper(ctrl.updateContact));

router.patch("/:id/status", validation(statusJoiSchema), ctrl.updateStatus);

module.exports = router;
