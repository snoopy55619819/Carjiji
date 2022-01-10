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

module.exports = () => {

  // GET Route: "/user/"
  //  Show user account info
  router.get("/", (req, res) => {
    // Get logged in user from cookies
    const loggedInUserId = req.cookies.user_id;

    userQueries.getUserById(loggedInUserId)
      .then(user => {
        const templateVars = { user };
        res.render("user", templateVars);
        // res.json({ user });
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
    const loggedInUserId = req.cookies.user_id;

    carQueries.getCarsForUser(loggedInUserId)
      .then(cars => {
        res.json({ cars });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // POST Route: "/user/:id"
  //  Edit account info
  router.post("/:id", (req, res) => {
    userQueries.getUserById()
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
