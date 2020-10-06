[![Build Status](https://travis-ci.org/MCFrank16/taxi-24.svg?branch=main)](https://travis-ci.org/MCFrank16/taxi-24)

# taxi-24
APIs for managing other companies fleet of drivers and allocate drivers to passengers.

### 1. Installation steps

- Clone the repo using:

`https://github.com/MCFrank16/taxi-24.git`

- Install dependencies by runing

`npm install` or `npm i`

- Create a `.env` and declare in your PORT as 9500 or whatever you like.

- Now you can run `npm run dev` to start the application in development mode.
- Endpoint can now be tested in Postman

### 2. Steps for running tests

- Run tests
  `npm run test`

### 3. API Endpoints
> This involves primarily creating RESTful API endpoints.

#### Features
| Endpoints                     |         Functionality
| ----------------------        |------------------------                         | 
| POST    /api/v1/create/driver | Create a driver.                                | 
| GET   /api/v1/read/all/drivers| Get all drivers                                 |
| GET   /api/v1/read/driver/:id| Get a driver by id                               |
| PUT   /api/v1/update/track/:driverID|   Track the Driver                        |
| GET    /api/v1/read/all/available  | Get all available Driver                   |
| GET  /api/v1/read/drivers/within   | get all available Drivers within 3 km      | 
|                                |                                                |
| POST   /api/v1/create/rider        | create a rider.                            | 
| GET   /api/v1/read/all/riders | Get all riders                                  |
| GET   /api/v1/read/rider/:id  | Get a rider by id                               |
| GET   /api/v1/read/close/drivers  | Get 3 close drivers to your location        |
| DELETE /:groupId/users/:id    | Delete a user in the group                      |
| POST /groups/groupId/messages | create a message to a  specific Group By its Identification |
|                               |                                                 |
| POST   /api/v1/create/trip    | Create a trip                                   |
| GET   /api/v1/read/all/active/trips  | Get all active Trips                     |
| GET /api/v1/read/all/completed/trips  | Get all completed Trips                 |
| PATCH /api/v1/complete/trip/:id | Update a trip and make it completed           |    

