const { Router } = require('express');

// Middlewares importation
const checkInput = require('./middlewares/validate');
const shouldNotExist = require('./middlewares/check-data');

// Handlers importation
const { createUser, getAllUser, getUser } = require('./handlers/create-controllers');


const router = Router();

// Drivers
router.post('/api/v1/create/driver', checkInput('createData'), shouldNotExist('Users'), createUser('driver'));
router.get('/api/v1/read/all/drivers', getAllUser('driver'));
router.get('/api/v1/read/driver/:id', getUser('driver'));

// // Riders
router.post('/api/v1/create/rider', checkInput('createData'), shouldNotExist('Users'), createUser('rider'));
router.get('/api/v1/read/all/riders', getAllUser('rider'));
router.get('/api/v1/read/rider/:id', getUser('rider'));

module.exports = router;
