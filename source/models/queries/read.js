const readQueries = {
  checkData: (table, email, phone) => `
        SELECT email, phonenumber FROM ${table} WHERE email = '${email}' AND phonenumber = '${phone}'
    
    `,
  readAllData: (type) => `
        SELECT * FROM Users WHERE type = '${type}';
  `,
  readData: (type, id) => `
        SELECT id, firstname, lastname, email, phonenumber, gender, profile FROM Users WHERE type = '${type}' AND id = '${id}'
  `
};

module.exports = readQueries;
