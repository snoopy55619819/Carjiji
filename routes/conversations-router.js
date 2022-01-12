/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/user-queries');
const carQueries = require('../db/queries/car-queries');
const conversationQueries = require('../db/queries/conversation-queries');

module.exports = () => {

  // GET Route: "/conversations"
  //  Show all conversations
  /*  Output rendered to page as .json:
    ***
    {
      convWithMessages: [
        {
          Conversation_ID: 1,
          Buyer: "Kira",
          Seller: "Alice",
          Car: "2019 Acura RDX",
          Car_Image: "https://i.ebayimg.com/images/g/5ZgAAOSw9ARh17iw/s-l640.webp",
          messages: [{message_1_obj}, {message_2_obj}...]
        },
        {Conversation_ID: 2, ...},
        {Conversation_ID: 3, ...}
      ]
    }
    ***
  */
  router.get("/", (req, res) => {
    // Get logged in user from cookies
    const loggedInUserId = req.cookies.user_id;

    conversationQueries.getAllConversationsForUser(loggedInUserId)
    // Returns an array of conversations which is passed onto the .then()
    // Since async code in within this .then(), used async-await to run this code syncronously.
    //  Take in an object of conversations -> query for messages with conversation_id
    //  -> add the messages into corresponding conversation
    .then(async conversations => {
        const convWithMessages = [];

        for (conv of conversations) {
          const convID = conv.Conversation_ID;
          //change to avoid lots of queries.
          await conversationQueries.getMessagesForConversation(convID)
          .then((messages) => {
            conv.messages = messages;
            convWithMessages.push(conv);
          })
        }
        res.json({ convWithMessages });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // TO-DO
  // POST Route: "/conversations/:id"
  //  Reply to a conversation
  router.post("/:id", (req, res) => {
    conversationQueries.getAllConversationsForUser(1)
      .then(conversations => {
        res.json({ conversations });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // TO-DO
  // POST Route: "/conversations"
  //  Start a new conversation
  router.post("/", (req, res) => {
    userQueries.getUsers()
      .then(conversations => {
        res.json({ conversations });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // TO-DO
  // POST Route: "/conversations/:id/delete"
  //  Delete a conversation
  router.post("/:id/delete", (req, res) => {
    userQueries.getUsers()
      .then(conversations => {
        res.json({ conversations });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
