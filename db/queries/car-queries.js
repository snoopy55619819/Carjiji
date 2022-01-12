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
    ORDER BY id
  `, [user_id])
    .then((res) => {
      return res.rows;
    })
    .catch(err => err.message);
};
//alter sequence cars_id_seq restart 1000;
const addCar = (newCar) => {
console.log('query file', newCar)
  const addCarQuery = `
  INSERT INTO cars (
    owner_id,
    car_make,
    car_model,
    car_year,
    listing_price,
    car_photo_url,
    description)
    VALUES
   ($1, $2, $3, $4, $5, $6, $7)
   RETURNING *
  `;
  const queryValues = [
    newCar.owner_id,
    newCar.car_make,
    newCar.car_model,
    newCar.car_year,
    newCar.listing_price,
    newCar.car_photo_url,
    newCar.description];

  return db.query(addCarQuery, queryValues)
    .then((res) => {
      return res.rows[0];
    })
    .catch(err => err.message);
};

const getCarAndOwnerByCarId = (car_id) => {

  return db.query(`
  SELECT cars.* , users.name as owner_name,
  users.email as owner_email,
  users.phone as owner_phone
  FROM cars
  JOIN users
  ON cars.owner_id = users.id
  WHERE cars.id = $1;
  `, [car_id])
    .then((res) => {
      return res.rows[0];
    })
    .catch(err => err.message);
};

const makeCarSold = (car_id) => {
  const updateCarStatusQuery = `
  UPDATE cars
  SET is_sold = 'TRUE'
  WHERE cars.id = $1
  RETURNING *
  `;
  // console.log('from cars query', car_id, updateCarStatusQuery);

  return db.query(updateCarStatusQuery, [car_id])
    .then((res) => {
      return res.rows[0];
    })
    .catch(err => err.message);
};

const makeCarActive = (car_id) => {
  const updateCarStatusQuery = `
  UPDATE cars
  SET is_sold = 'FALSE'
  WHERE cars.id = $1
  RETURNING *
  `;
  // console.log('from cars query', car_id, updateCarStatusQuery);

  return db.query(updateCarStatusQuery, [car_id])
    .then((res) => {
      return res.rows[0];
    })
    .catch(err => err.message);
};


module.exports = {
  getAllCars,
  getCarByCarId,
  getCarsForUser,
  addCar,
  getCarAndOwnerByCarId,
  makeCarSold,
  makeCarActive
};
