const { response } = require('express')
const db = require('../lib/db')

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then((res) => {
      return res.rows;
    })
    .catch(err => err.message);
};

module.exports = {
  getUsers
};
