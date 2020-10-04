const readQueries = {
  checkData: (table, email, phone) => `
        SELECT email, phonenumber FROM ${table} WHERE email = '${email}' AND phonenumber = '${phone}'
    
    `,
  readAllData: (table) => `
        SELECT * FROM ${table};
  `,
  readData: (table, id) => `
        SELECT id, firstname, lastname, email, phonenumber, gender, profile FROM ${table} WHERE id = '${id}'
  `
};

module.exports = readQueries;
