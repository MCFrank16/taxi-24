/**
 * an object which seeds data into the users table
 */

const seedQueries = {
  dataSeed: `
       INSERT INTO Users (id, firstname, lastname, email, phonenumber, gender, type, createdAt, updatedAt)
       VALUES 
       ('732ab2c8-17bc-426e-affa-258ad9c12447', 'Harerimana', 'Claude', 
       'harera2020@gmail.com', '+250788995532', 'male', 'driver', '${new Date().toLocaleDateString()}', '${new Date().toLocaleDateString()}'),
       ('732ab2c8-17bc-426e-affa-258ad9c12448', 'Sibomana', 'Emmanuel', 
       'sibo2020@gmail.com', '+250788996632', 'male', 'rider', '${new Date().toLocaleDateString()}', '${new Date().toLocaleDateString()}'),
       ('732ab2c8-17bc-426e-affa-258ad9c12449', 'Manzi', 'Jean', 
       'manziJean2020@gmail.com', '+250788994432', 'male', 'rider', '${new Date().toLocaleDateString()}', '${new Date().toLocaleDateString()}'),
       ('732ab2c8-17bc-426e-affa-258ad9c12450', 'Iradukunda', 'Jessie', 
       'irajessie2020@gmail.com', '+250788993332', 'female', 'driver', '${new Date().toLocaleDateString()}', '${new Date().toLocaleDateString()}'),
       ('732ab2c8-17bc-426e-affa-258ad9c12451', 'Ihirwe', 'Nika', 
       'ihirwe16@gmail.com', '+250788992232', 'male', 'driver', '${new Date().toLocaleDateString()}', '${new Date().toLocaleDateString()}')
    `,

  seedTrack: `
      INSERT INTO Track (id, DriverID, location, isAvailable, onTrip, updatedAt)
      VALUES
      ('732ab2c8-17bc-426e-abba-258ad9c12447', '732ab2c8-17bc-426e-affa-258ad9c12447', 
      '{"lat":-1.940178,"long":30.873888}', 'yes', 'no', '${new Date().toLocaleDateString()}'),
      ('732ab2c8-17bc-426e-acca-258ad9c12447', '732ab2c8-17bc-426e-affa-258ad9c12451', 
      '{"lat":-1.940278,"long":29.873888}', 'yes', 'yes', '${new Date().toLocaleDateString()}'),
      ('732ab2c8-17bc-426e-adda-258ad9c12447', '732ab2c8-17bc-426e-affa-258ad9c12451', 
      '{"lat":-1.940378,"long":29.873988}', 'no', 'yes', '${new Date().toLocaleDateString()}'),
      ('732ab2c8-17bc-426e-affa-258ad9c12447', '732ab2c8-17bc-426e-affa-258ad9c12450', 
      '{"lat":-1.940478,"long":29.87388}', 'yes', 'yes', '${new Date().toLocaleDateString()}'),
      ('732ab2c8-17bc-426e-aeea-258ad9c12447', '732ab2c8-17bc-426e-affa-258ad9c12452', 
      '{"lat":0.338863,"long":32.554064}', 'yes', 'yes', '${new Date().toLocaleDateString()}'),
      ('732ab2c8-17bc-426e-agga-258ad9c12447', '732ab2c8-17bc-426e-affa-258ad9c12453', 
      '{"lat":1.338863,"long":32.574064}', 'yes', 'yes', '${new Date().toLocaleDateString()}'),
      ('732ab2c8-17bc-426e-ahha-258ad9c12447', '732ab2c8-17bc-426e-affa-258ad9c12543', 
      '{"lat":1.348864,"long":32.574065}', 'yes', 'yes', '${new Date().toLocaleDateString()}'),
      ('732ab2c8-17bc-426e-ajja-258ad9c12447', '732ab2c8-17bc-426e-affa-258as9c12543', 
      '{"lat":1.348664,"long":32.574565}', 'yes', 'yes', '${new Date().toLocaleDateString()}'),
      ('732ab2c8-17bc-426e-anna-258ad9c12447', '732ab2c8-17bc-426e-affa-258xs9c12543', 
      '{"lat":1.358664,"long":32.564565}', 'yes', 'yes', '${new Date().toLocaleDateString()}')
  `,
  seedTrip: `
      INSERT INTO Trips (id, fromLocation, toLocation, status, distance, amount, RiderID, DriverID, createdAt, updatedAt)
      VALUES
      ('312d0cc0-c15f-460d-a49b-bf1ccc4d4ce9', '{"lat": -1.940238, "long": 79.872888}', '{ "lat": -1.900178, "long": 30.823888 }',
      'active', '45', '0', '732ab2c8-17bc-426e-affa-258ad9c12448', '732ab2c8-17bc-426e-affa-258ad9c12451',
      '${new Date().toLocaleDateString()}', '${new Date().toLocaleDateString()}'),
      ('312d0cc0-c15f-460d-a50b-bf1ccc4d4ce9', '{"lat": -1.90238, "long": 79.82888}', '{ "lat": -1.90178, "long": 30.82388 }',
      'completed', '50', '150000', '732ab2c8-17bc-426e-affa-258ad9c11448', '732ab2c8-17bc-426e-affa-258ad9c12451',
      '${new Date().toLocaleDateString()}', '${new Date().toLocaleDateString()}'),
      ('312d0cc0-c15f-460d-a51b-bf1ccc4d4ce9', '{"lat": -1.91238, "long": 79.83888}', '{ "lat": -1.90678, "long": 30.82788 }',
      'active', '2', '0', '732ab2c9-17bc-426e-affa-258ad9c11448', '732ab2c8-17bc-426e-affa-258ad9c12351',
      '${new Date().toLocaleDateString()}', '${new Date().toLocaleDateString()}'),
      ('312d0cc0-c15f-410d-a51b-bf1ccc4d4ce9', '{"lat": -1.91298, "long": 79.83808}', '{ "lat": -1.90178, "long": 30.82288 }',
      'completed', '3', '5000', '732ab2c9-17bc-426e-affa-258vd9c11448', '732ab2c8-17bc-426e-alfa-258ad9c12351',
      '${new Date().toLocaleDateString()}', '${new Date().toLocaleDateString()}')
  `,
  seedInvoice: `
      INSERT INTO Invoice (id, TripID, completedAt, amount)
      VALUES 
      ('732ab2c8-01bc-426e-anna-258ad9c12447', '312d0cc0-c15f-410d-a51b-bf1ccc4d4ce9', '${new Date().toLocaleDateString()}', 
      '5000'),
      ('732ab2c8-01bc-426e-anna-258ad9c12147', '312d0cc0-c15f-460d-a50b-bf1ccc4d4ce9', '${new Date().toLocaleDateString()}',
      '150000')
  `
};

module.exports = seedQueries;
