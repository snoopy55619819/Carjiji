const { response } = require('express')
const db = require('../lib/db')

const getUsers = () => {
  db.query('SELECT * FROM users;')
    .then((res) => {
      return res.rows;
    })
    .catch(err => err.message);
};

modules.exports = {
  getUsers
};
