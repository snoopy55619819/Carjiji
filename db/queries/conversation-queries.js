const { response } = require('express')
const db = require('../lib/db')

const getAllConversationIdsForUser = (user_id) => {
  /*
  (`
  SELECT * FROM conversations
  WHERE buyer_id = $1
  OR seller_id = $1
  `, [user_id])
  */
  return db.query('SELECT * FROM users;')
    .then((res) => {
      return res.rows;
    })
    .catch(err => err.message);
};

const getConversationById = (conversation_id) => {
  /*
  (`
  SELECT * FROM cconversation
  WHERE conversations.id = $1
  `, [conversation_id])
  */
  return db.query(`SELECT * FROM users`, [car_id])
    .then((res) => {
      return res.rows[0];
    })
    .catch(err => err.message);
};

const getMessagesForConversation = (conversation_id) => {
  /*
  (`
  SELECT *
  FROM messages
  WHERE conversation_id = $1
  `, [conversation_id])
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
