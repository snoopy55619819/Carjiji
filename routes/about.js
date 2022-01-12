/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/sample-users-query');
const carQueries = require('../db/queries/car-queries');

module.exports = () => {

  // GET Route: "/about"
  //  Show one car
  router.get("/:id", (req, res) => {

    carQueries.getCarByCarId(req.params.id)
      .then(car => {
         res.render('single-car.ejs', {car});
        // res.json({ car });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

  });

  return router;
};
