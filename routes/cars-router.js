/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/sample-users-query');

module.exports = (db) => {

  // Route: "/cars/"
  router.get("/", (req, res) => {
    userQueries.getUsers()
      .then(data => {
        const cars = data.rows;
        res.json({ data });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // Route: "/cars/:id"
  router.get("/:id", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const cars = data.rows;
        res.json({ cars });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const cars = data.rows;
        res.json({ cars });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
