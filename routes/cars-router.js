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

  // GET Route: "/cars/"
  //  Show all cars
  router.get("/", (req, res) => {
    userQueries.getUsers()
      .then(cars => {
        res.json({ cars });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // GET Route: "/cars/:id"
  //  Individual car details
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

  // POST Route: "/cars/:id"
  //  Edit car posting details
  router.post("/", (req, res) => {
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

  // POST Route: "/cars/new"
  //  Add new car posting
  router.post("/", (req, res) => {
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

  // POST Route: "/cars/:id/delete"
  //  Delete a car posting
  router.post("/", (req, res) => {
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
