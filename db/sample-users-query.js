const { response } = require('express')
const db = require('../lib/db')

const getUsers = () => {
  console.log(db);
  return db.query('SELECT * FROM users;')
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    })
    .catch(err => err.message);
};

module.exports = {
  getUsers
};
