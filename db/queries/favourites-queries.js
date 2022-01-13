const { response } = require('express')
const db = require('../../lib/db')

const getAllFavourites = () => {

  return db.query('SELECT * FROM users_favorite_cars')
    .then((res) => {
      return res.rows;
    })
    .catch(err => err.message);
};


const getFavouritesForUser = (user_id) => {

  return db.query(`
    SELECT * FROM cars
    JOIN users_favorite_cars ON cars.id = users_favorite_cars.car_id
    JOIN users ON users.id = users_favorite_cars.user_id
    WHERE user_id = $1
    ORDER BY car_id
  `, [user_id])
    .then((res) => {
      return res.rows;
    })
    .catch(err => err.message);
};


const addFavourite = (user_id, car_id) => {

  return db.query(`
  INSERT INTO users_favorite_cars
  (user_id, car_id)
  VALUES
  ($1, $2)
  RETURNING *
  `, [user_id, car_id])
    .then((res) => {
      return res.rows[0];
    })
    .catch(err => err.message);
};

const deleteFavourite = (user_id, car_id) => {

  return db.query(`
  DELETE FROM users_favorite_cars
  WHERE user_id = $1
  AND car_id = $2
  `, [user_id, car_id])
    .then((res) => {
      return res.rows[0];
    })
    .catch(err => err.message);
};

module.exports = {
  getAllFavourites,
  addFavourite,
  deleteFavourite,
  getFavouritesForUser
};
