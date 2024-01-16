const express = require('express');
const router = express.Router();

const { addContact, getAllContacts, getContact, deleteContact, updateContact } = require('../controllers/directoryController');
const { isAuthenticated } = require("../middleware/auth");

router.post('/add', addContact);
router.get('/getAll', getAllContacts);
router.get('/getById/:Id', getContact);
router.delete('/delete/:Id', deleteContact);
router.put('/update/:Id', updateContact);

module.exports = router;