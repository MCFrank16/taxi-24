const insertQueries = {
  insertData: (id, firstname, lastname, email, phonenumber, gender, type, createdAt, updatedAt) => `
       INSERT INTO Users (id, firstname, lastname, email, phonenumber, gender, type, createdAt, updatedAt)
       VALUES ('${id}', '${firstname}', '${lastname}', '${email}', '${phonenumber}', '${gender}', '${type}', '${createdAt}', '${updatedAt}')
    `,
  insertTrip: (id, from, to, status, distance, riderID, driverID, createdAt, updatedAt) => `
       INSERT INTO Trips (id, fromLocation, toLocation, status, distance, RiderID, DriverID, createdAt, updatedAt)
       VALUES ('${id}', '${from}', '${to}', '${status}', ${distance}, '${riderID}', '${driverID}', '${createdAt}', '${updatedAt}')
  `,
  insertInvoice: (id, TripID, completedAt, amount) => `
       INSERT INTO Invoice (id, TripID, completedAt, amount)
       VALUES ('${id}', '${TripID}', '${completedAt}', '${amount}')
  `
};

module.exports = insertQueries;
