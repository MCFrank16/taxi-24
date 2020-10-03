const createQueries = {

  createTableDriver: `
     CREATE TABLE IF NOT EXISTS Drivers(
        id VARCHAR(150) NOT NULL PRIMARY KEY,
        firstname VARCHAR(150),
        lastname VARCHAR(150),
        email VARCHAR(150) UNIQUE,
        phonenumber VARCHAR(20) UNIQUE,
        location VARCHAR(250),
        status VARCHAR(100),
        createdAt VARCHAR(100),
        updatedAt VARCHAR(100)
     )
    `,
  createTableRider: `
     CREATE TABLE IF NOT EXISTS Riders(
        id VARCHAR(150) NOT NULL PRIMARY KEY,
        firstname VARCHAR(150),
        lastname VARCHAR(150),
        email VARCHAR(150) UNIQUE,
        phonenumber VARCHAR(20) UNIQUE,
        createdAt VARCHAR(100),
        updatedAt VARCHAR(100)
     )
    `,

  createTableTrip: `
     CREATE TABLE IF NOT EXISTS Trips(
         id VARCHAR(150) NOT NULL PRIMARY KEY,
         fromLocation VARCHAR(250),
         toLocation VARCHAR(250),
         status VARCHAR(150),
         RiderID VARCHAR(150) ,
         DriverID VARCHAR(150),
         createdAt VARCHAR(100),
         updateAt VARCHAR(100),
         FOREIGN KEY (id) REFERENCES Riders (id),
         FOREIGN KEY (id) REFERENCES Drivers (id)
     )
  `,

  createTableInvoice: `
     CREATE TABLE IF NOT EXISTS Invoice(
         id VARCHAR(150) NOT NULL PRIMARY KEY,
         TripID VARCHAR(150),
         completedAt VARCHAR(100),
         amount INT,
         FOREIGN KEY (id) REFERENCES Trips (id) 
     )
  `
};

module.exports = createQueries;
