const express = require('express');
const router = express.Router();

const { addPartner, getByType, getPartner, getAllPartners, deletePartner, updatePartner } = require('../controllers/partnersController');
const { isAuthenticated } = require("../middleware/auth");

router.post('/add', addPartner);
router.get('/getAll', getAllPartners);
router.get('/getById/:Id', getPartner);
router.get('/getByType', getByType);
router.delete('/delete/:Id', deletePartner);
router.put('/update/:Id', updatePartner);

module.exports = router;