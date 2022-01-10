const { response } = require('express')
const db = require('../../lib/db')

const getAllCars = () => {

  return db.query('SELECT * FROM cars;')
    .then((res) => {
      return res.rows;
    })
    .catch(err => err.message);
};

const getCarByCarId = (car_id) => {

  return db.query(`
    SELECT * FROM cars
    WHERE cars.id = $1
  `, [car_id])
    .then((res) => {
      return res.rows[0];
    })
    .catch(err => err.message);
};

const getCarsForUser = (user_id) => {

  return db.query(`
    SELECT * FROM cars
    WHERE owner_id = $1
  `, [user_id])
    .then((res) => {
      return res.rows;
    })
    .catch(err => err.message);
};

module.exports = {
  getAllCars,
  getCarByCarId,
  getCarsForUser
};
