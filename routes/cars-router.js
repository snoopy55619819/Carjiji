/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const carQueries = require('../db/queries/car-queries');

module.exports = () => {

  // GET Route: "/cars/"
  //  Show all cars
  router.get("/", (req, res) => {
    carQueries.getAllActiveCars()
      .then(cars => {
        res.render('cars', { cars });
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
    carQueries.getCarByCarId(req.params.id)
      .then(car => {
        res.json({ car });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // POST Route: "/cars/search"
  //  Search results page
  router.post("/search", (req, res) => {
    const priceRange = req.body.select_price_range;

    if (!priceRange) {
      return res.redirect('/cars');
    } else {
      const parsedPriceRange = priceRange.split(' ');

      carQueries.getCarsByPriceRange(parsedPriceRange)
        .then(cars => {
          return res.render('cars', { cars });
        })
        .catch(err => {
          return res.status(500).json({ error: err.message });
        });
    }
  });

  // POST Route: "/cars/:id"
  //  Edit car posting details
  router.post("/:id", (req, res) => {
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
  router.post("/new", (req, res) => {
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
  router.post("/:id/delete", (req, res) => {
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
