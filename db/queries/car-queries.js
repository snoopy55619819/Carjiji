const { response } = require('express')
const db = require('../../lib/db')

const getAllCars = () => {

  return db.query('SELECT * FROM cars;')
    .then((res) => {
      return res.rows;
    })
    .catch(err => err.message);
};

const getAllActiveCars = () => {

  return db.query(`SELECT * FROM cars
    WHERE is_sold = FALSE
    ORDER BY id`)
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

const getCarsByPriceRange = (priceRange) => {

  return db.query(`
    SELECT * FROM cars
    WHERE listing_price > ($1 * 100)
    AND listing_price < ($2 * 100)
    AND is_sold = FALSE
    ORDER BY listing_price`, priceRange)
    .then((res) => {
      return res.rows;
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
  getAllActiveCars,
  getCarByCarId,
  getCarsByPriceRange,
  getCarsForUser
};
