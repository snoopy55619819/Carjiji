/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
// const carQueries = require('../db/queries/car-queries')

module.exports = (db) => {

  // Route: "/cars/"
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
