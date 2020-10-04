const insertQueries = {
  insertData: (id, firstname, lastname, email, phonenumber, gender, type, createdAt, updatedAt) => `
       INSERT INTO Users (id, firstname, lastname, email, phonenumber, gender, type, createdAt, updatedAt)
       VALUES ('${id}', '${firstname}', '${lastname}', '${email}', '${phonenumber}', '${gender}', '${type}', '${createdAt}', '${updatedAt}')
    `
};

module.exports = insertQueries;
