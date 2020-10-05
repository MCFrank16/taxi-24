const { Router } = require('express');

// Middlewares importation
const checkInput = require('./middlewares/validate');
const { shouldExist, shouldNotExist } = require('./middlewares/check-data');
const getAllDrivers = require('./middlewares/get-drivers');
const invoice = require('./middlewares/invoice');

// Handlers importation
const { createUser, getAllUser, getUser } = require('./handlers/create-controllers');

const {
  trackDriver, allAvailableDrivers, getAllDriversWithin3KM, getClosestDrivers
} = require('./handlers/track-controller');

const {
  createTrip, ActiveTrips, CompletedTrip, finishTrip
} = require('./handlers/Trip/trip-controller');

const router = Router();

// Drivers
router.post('/api/v1/create/driver', checkInput('createData'), shouldNotExist('Users', 'email'), createUser('driver'));
router.get('/api/v1/read/all/drivers', getAllUser('driver'));
router.get('/api/v1/read/driver/:id', getUser('driver'));
router.put('/api/v1/update/track/:driverID', checkInput('updateTrack'), shouldExist('Track', 'DriverID'), trackDriver);
router.get('/api/v1/read/all/available', getAllDrivers, allAvailableDrivers);
router.get('/api/v1/read/drivers/within', getAllDrivers, getAllDriversWithin3KM);

// Riders
router.post('/api/v1/create/rider', checkInput('createData'), shouldNotExist('Users'), createUser('rider'));
router.get('/api/v1/read/all/riders', getAllUser('rider'));
router.get('/api/v1/read/rider/:id', getUser('rider'));
router.get('/api/v1/read/close/drivers', getAllDrivers, getClosestDrivers);

// Trip
router.post('/api/v1/create/trip', checkInput('createTrip'), createTrip);
router.get('/api/v1/read/all/active/trips', ActiveTrips);
router.get('/api/v1/read/all/completed/trips', CompletedTrip);
router.patch('/api/v1/complete/trip/:id', checkInput('completeTrip'), invoice, finishTrip);

module.exports = router;
