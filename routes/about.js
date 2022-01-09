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

  // GET Route: "/about"
  //  Show all cars
  router.get("/", (req, res) => {
    res.render('about.ejs');
  });

  return router;
};
