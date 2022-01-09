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

  // GET Route: "/user/"
  //  Show user account info
  router.get("/", (req, res) => {
    userQueries.getUsers()
      .then(users => {
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // GET Route: "/user/listings"
  //  Show user listings
  router.get("/listings", (req, res) => {
    userQueries.getUsers()
      .then(users => {
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // POST Route: "/user/:id"
  //  Edit account info
  router.post("/listings", (req, res) => {
    userQueries.getUsers()
      .then(users => {
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
