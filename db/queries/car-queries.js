const { response } = require('express')
const db = require('../lib/db')

const getAllCars = () => {
  return db.query('SELECT * FROM users;')
    .then((res) => {
      return res.rows;
    })
    .catch(err => err.message);
};

const getCarByCarId = (car_id) => {
  return db.query(`SELECT * FROM users`, [car_id])
    .then((res) => {
      return res.rows[0];
    })
    .catch(err => err.message);
};

const getCarsForUser = (user_id) => {
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
  getAllCars,
  getCarByCarId
};
