import express = require('express');
import {createContact, getAllContacts, getContactById} from '../controllers/contactsController';

const router = express.Router();

router.get('/', getAllContacts);
router.get('/:id', getContactById);

router.post('/', createContact)

module.exports = router;
