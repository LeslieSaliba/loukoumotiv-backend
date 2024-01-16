const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const { addTeamMember, getByRole, login, getTeamMember, getAllMembers, deleteTeamMember, updateTeamMember, switchToMasseur, switchToAdmin } = require('../controllers/teamController');
const { isAuthenticated } = require("../middleware/auth");

router.post('/login', login);
router.get('/getById/:Id', getTeamMember);
router.get('/getAll', getAllMembers);
router.put('/update/:Id', upload.single('file'), updateTeamMember);
router.post('/getByRole', getByRole);

router.post('/add', addTeamMember);
router.delete('/delete/:Id', deleteTeamMember);
router.put('/switchToMasseur/:Id', switchToMasseur);
router.put('/switchToAdmin/:Id', switchToAdmin);

module.exports = router;