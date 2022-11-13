const express = require('express');

const {getContacts, getAllContacts, getContact, createContact, updateContact, deleteContact, getContactById,
    editContact
} = require('../controllers/contactsController');

const router = express.Router();

router.get('/', getAllContacts);
router.get('/:id', getContactById);

router.post('/', createContact)

router.put('/:id', editContact);

router.delete('/:id', deleteContact)

module.exports = router;
