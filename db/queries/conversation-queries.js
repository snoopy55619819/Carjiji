const { response } = require('express')
const db = require('../../lib/db')

const getAllConversationsForUser = (user_id) => {

  return db.query(`
    SELECT conversations.id as "Conversation_ID",
      users_1.name as "Buyer",
      users_2.name as "Seller",
      CONCAT(car_year,' ', car_make, ' ', car_model) as "Car",
      car_photo_url as "Car_Image"
    FROM conversations
    JOIN users as users_1 ON buyer_id = users_1.id
    JOIN users as users_2 ON seller_id = users_2.id
    JOIN cars ON car_id = cars.id
    WHERE buyer_id = $1
    OR seller_id = $2
  `, [user_id, user_id])
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

  return db.query(`
    SELECT
      message_body as "Message",
      created_time as "Sent_at",
      users.name as "Sent_by"
    FROM messages
    JOIN users ON users.id = message_sender_id
    WHERE conversation_id = $1
    ORDER BY messages.id
  `, [conversation_id])
    .then((res) => {
      return res.rows;
    })
    .catch(err => err.message);
};


module.exports = {
  getAllConversationsForUser,
  getMessagesForConversation
};
