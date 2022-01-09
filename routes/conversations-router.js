/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/sample-users-query');

module.exports = () => {

  // GET Route: "/conversations"
  //  Show all conversations
  router.get("/", (req, res) => {
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

  // POST Route: "/conversations/:id"
  //  Reply to a conversation
  router.post("/:id", (req, res) => {
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
