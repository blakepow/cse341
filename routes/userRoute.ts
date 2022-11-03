import express = require('express');
import {getUser} from '../controllers/userController';

const router = express.Router();

router.get('/', getUser);

module.exports = router;
