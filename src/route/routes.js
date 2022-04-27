const express = require('express');
const router = express.Router();
const controller = require ('../controller/controller');


router.get('/api/v0/info/:id', controller.info)
router.get('/api/v0/infoall',controller.infoAll)




module.exports = router;
