const { response } = require('express')
const db = require('../../lib/db')

const getAllUsers = () => {

  return db.query('SELECT * FROM users;')
    .then((res) => {
      return res.rows;
    })
    .catch(err => err.message);
};

const getUserById = (user_id) => {

  return db.query(`
    SELECT * FROM users
    WHERE users.id = $1
  `, [user_id])
    .then((res) => {
      return res.rows[0];
    })
    .catch(err => err.message);
};

const updateUserInfo = (userID, field, updatedValue) => {
  const updateUserQuery = `
  UPDATE users
  SET ${field} = '${updatedValue}'
  WHERE users.id = ${userID}
  RETURNING *
  `;

  return db.query(updateUserQuery)
    .then((res) => {
      return res.rows[0];
    })
    .catch(err => err.message);
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserInfo
};
