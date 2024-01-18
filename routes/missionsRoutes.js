const express = require('express');
const router = express.Router();

const { addMission, getByType, getMission, getAllMissions, deleteMission, updateMission, getByStatus, getByPartnerBillingStatus, getByTeamBillingStatus, registerToMission, dropMission, getMissionsByTeamMember } = require('../controllers/missionsController');
const { isAuthenticated } = require("../middleware/auth");

router.post('/add', addMission);
router.put('/register', registerToMission);
router.put('/drop', dropMission);
router.get('/getAll', getAllMissions);
router.get('/getById/:Id', getMission);
router.post('/getByType', getByType);
router.post('/getByStatus', getByStatus);
router.post('/getByPartnerBillingStatus', getByPartnerBillingStatus);
router.post('/getByTeamBillingStatus', getByTeamBillingStatus);
router.delete('/delete/:Id', deleteMission);
router.put('/update/:Id', updateMission);
router.get('/getMissionsByTeamMember/:Id', getMissionsByTeamMember);

module.exports = router;