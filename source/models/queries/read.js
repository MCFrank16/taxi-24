const readQueries = {
  checkData: (table, field, value) => `
        SELECT * FROM ${table} WHERE ${field} = '${value}'
    
    `,
  readAllData: (type) => `
        SELECT * FROM Users WHERE type = '${type}';
  `,
  readData: (type, id) => `
        SELECT id, firstname, lastname, email, phonenumber, gender, profile FROM Users WHERE type = '${type}' AND id = '${id}'
  `,
  readAllAvailable: (table, field, value) => `
        SELECT DriverID, location, isAvailable, onTrip FROM ${table} WHERE ${field} = '${value}'
  `,
  readAllTrip: (status) => `
        SELECT * FROM Trips WHERE status = '${status}'
  `,
  readTrip: (id) => `
        SELECT id, fromLocation, toLocation, status, distance, RiderID, DriverID FROM Trips WHERE id = '${id}' 
  `
};

module.exports = readQueries;
