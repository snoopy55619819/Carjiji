/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const favouritesQueries = require('../db/queries/favourites-queries');

module.exports = () => {

  // GET Route: "/favourites/api"
  //  Show user account info
  router.get("/api", (req, res) => {
    // Get logged in user from cookies

    favouritesQueries.getAllFavourites()
      .then(favList => {

        res.json(favList);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

   // POST Route: "/favourites/api"
  //  Show user account info
  router.post("/api", (req, res) => {
    // Get logged in user from cookies
    console.log('/api post ran from router.')
    console.log(req.body);
    const user_id = Number(req.body.user_id);
    const car_id = Number(req.body.car_id);

    favouritesQueries.addFavourite(user_id, car_id)
      .then(favItem => {
        console.log('request complete. favourite added:', favItem);
        // res.json(favItem);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  // POST Route: "/favourites/api"
  //  Show user account info
  router.post("/d/api", (req, res) => {
    // Get logged in user from cookies
    console.log('/d/api post ran from router.')
    console.log(req.body);
    const user_id = Number(req.body.user_id);
    const car_id = Number(req.body.car_id);

    favouritesQueries.deleteFavourite(user_id, car_id)
      .then(favItem => {
        console.log('request complete. favourite deleted:', favItem);
        // res.json(favItem);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
