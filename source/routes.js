const { Router } = require('express');

// Middlewares importation
const checkInput = require('./middlewares/validate');
const shouldNotExist = require('./middlewares/check-data');

// Handlers importation
const { createDriver, getAllDrivers, getDriver } = require('./handlers/Drivers/driver-controllers');


const router = Router();

// Drivers
router.post('/api/v1/create/driver', checkInput('createDriver'), shouldNotExist('Drivers'), createDriver);
router.get('/api/v1/read/all/drivers', getAllDrivers);
router.get('/api/v1/read/driver/:id', getDriver);

module.exports = router;
