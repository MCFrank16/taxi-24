const { Router } = require('express');

// Middlewares importation
const checkInput = require('./middlewares/validate');
const { shouldExist, shouldNotExist } = require('./middlewares/check-data');
const getAllDrivers = require('./middlewares/get-drivers');

// Handlers importation
const { createUser, getAllUser, getUser } = require('./handlers/create-controllers');
const {
  trackDriver, allAvailableDrivers, getAllDriversWithin3KM, getClosestDrivers
} = require('./handlers/track-controller');

const router = Router();

// Drivers
router.post('/api/v1/create/driver', checkInput('createData'), shouldNotExist('Users', 'email'), createUser('driver'));
router.get('/api/v1/read/all/drivers', getAllUser('driver'));
router.get('/api/v1/read/driver/:id', getUser('driver'));
router.put('/api/v1/update/track/:driverID', checkInput('updateTrack'), shouldExist('Track', 'DriverID'), trackDriver);
router.get('/api/v1/read/all/available', getAllDrivers, allAvailableDrivers);
router.get('/api/v1/read/drivers/within', getAllDrivers, getAllDriversWithin3KM);

// // Riders
router.post('/api/v1/create/rider', checkInput('createData'), shouldNotExist('Users'), createUser('rider'));
router.get('/api/v1/read/all/riders', getAllUser('rider'));
router.get('/api/v1/read/rider/:id', getUser('rider'));
router.get('/api/v1/read/close/drivers', getAllDrivers, getClosestDrivers);

module.exports = router;
