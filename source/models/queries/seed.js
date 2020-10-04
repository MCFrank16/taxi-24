const seedQueries = {
  driverSeed: `
       INSERT INTO Drivers (id, firstname, lastname, email, phonenumber, gender, createdAt, updatedAt)
       VALUES ('732ab2c8-17bc-426e-affa-258ad9c12447', 'Harerima', 'Claude', 
       'harera2020@gmail.com', '+250788995532', 'male', '${new Date().toLocaleDateString()}', '${new Date().toLocaleDateString()}')
    `
};

module.exports = seedQueries;
