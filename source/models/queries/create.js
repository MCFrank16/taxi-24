const createQueries = {

  createTableUser: `
     CREATE TABLE IF NOT EXISTS Users(
        id VARCHAR(150) NOT NULL PRIMARY KEY,
        firstname VARCHAR(150),
        lastname VARCHAR(150),
        email VARCHAR(150) UNIQUE,
        phonenumber VARCHAR(20) UNIQUE,
        gender VARCHAR(10),
        profile VARCHAR(250) DEFAULT 'noimage link',
        type VARCHAR(10),
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
         updatedAt VARCHAR(100),
         FOREIGN KEY (RiderID) REFERENCES Riders (id),
         FOREIGN KEY (DriverID) REFERENCES Drivers (id)
     )
  `,

  createTableInvoice: `
     CREATE TABLE IF NOT EXISTS Invoice(
         id VARCHAR(150) NOT NULL PRIMARY KEY,
         TripID VARCHAR(150),
         completedAt VARCHAR(100),
         amount INT,
         FOREIGN KEY (TripID) REFERENCES Trips (id) 
     )
  `,
  createTableTrackDriver: `
     CREATE TABLE IF NOT EXISTS Track(
        id VARCHAR(150) NOT NULL PRIMARY KEY,
        DriverID VARCHAR(150),
        location VARCHAR(250),
        isAvailable VARCHAR(15),
        onTrip VARCHAR(15),
        updatedAt VARCHAR(100),
        FOREIGN KEY (DriverID) REFERENCES Drivers (id)
     )
  `
};

module.exports = createQueries;
