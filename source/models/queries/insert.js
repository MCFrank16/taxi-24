const insertQueries = {
  insertDriver: (id, firstname, lastname, email, phonenumber, gender, createdAt, updatedAt) => `
       INSERT INTO Drivers (id, firstname, lastname, email, phonenumber, gender, createdAt, updatedAt)
       VALUES ('${id}', '${firstname}', '${lastname}', '${email}', '${phonenumber}', '${gender}', '${createdAt}', '${updatedAt}')
    `
};

module.exports = insertQueries;
