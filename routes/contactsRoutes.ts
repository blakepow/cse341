import express = require('express');
import {
    createContact,
    deleteContact,
    editContact,
    getAllContacts,
    getContactById
} from '../controllers/contactsController';

const router = express.Router();

router.get('/', getAllContacts);
router.get('/:id', getContactById);

router.post('/', createContact)

router.put('/:id', editContact);

router.delete('/:id', deleteContact)

module.exports = router;
