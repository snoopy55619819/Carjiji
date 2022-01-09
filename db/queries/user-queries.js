const { response } = require('express')
const db = require('../lib/db')

const getAllUsers = () => {
  /*
  SELECT * FROM users
  */
  return db.query('SELECT * FROM users;')
    .then((res) => {
      return res.rows;
    })
    .catch(err => err.message);
};

const getUserById = (user_id) => {
  /*
  (`
  SELECT * FROM cars
  WHERE cars.id = $1
  `, [car_id])
  */
  return db.query(`SELECT * FROM users`, [car_id])
    .then((res) => {
      return res.rows[0];
    })
    .catch(err => err.message);
};

const getCarsForUser = (user_id) => {
  /*
  (`
  SELECT * FROM cars
  WHERE owner_id = $1
  `, [user_id])
  */
  return db.query(`
    SELECT *
    FROM users
  `, [user_id])
    .then((res) => {
      return res.rows;
    })
    .catch(err => err.message);
};

modules.exports = {
  getAllUsers,
  getUserById,
  getCarsForUser
};
