"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var contactsController_1 = require("../controllers/contactsController");
var router = express.Router();
router.get('/', contactsController_1.getAllContacts);
router.get('/:id', contactsController_1.getContactById);
router.post('/', contactsController_1.createContact);
module.exports = router;