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
  
  `
};

module.exports = seedQueries;
