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
    `
};

module.exports = seedQueries;
