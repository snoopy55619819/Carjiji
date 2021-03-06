/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const carQueries = require("../db/queries/car-queries");
const userQueries = require("../db/queries/user-queries");

module.exports = () => {
  // GET Route: "/cars/"
  //  Show all cars
  router.get("/", (req, res) => {
    carQueries.getAllActiveCars()
      .then(cars => {
        res.render('cars', { cars });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // GET Route: "/cars/"
  //  Show all cars
  router.get("/new", (req, res) => {
    const loggedInUserId = req.cookies.user_id;

    userQueries
      .getUserById(loggedInUserId)
      .then((user) => {
        // res.json({ cars });
        res.render("addCar", { user });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });


  // // POST Route: "/cars/:id"
  // //  Edit car posting details
  // router.post("/:id", (req, res) => {
  //   db.query(`SELECT * FROM users;`)
  //     .then(data => {
  //       const cars = data.rows;
  //       res.json({ cars });
  //     })
  //     .catch(err => {
  //       res
  //         .status(500)
  //         .json({ error: err.message });
  //     });
  // });

  // GET Route: "/cars/:id"
  //  Individual car details
  router.get("/:id", async (req, res) => {
    const loggedInUserId = req.cookies.user_id;
    let userObj;
    // let ownerObj;

    await userQueries
      .getUserById(loggedInUserId)
      .then((user) => {
        userObj = user;
      })
      .catch((err) => err.message);

    carQueries.getCarAndOwnerByCarId(req.params.id)
      .then(car => {
        //  console.log(car);
        res.render('single-car.ejs', { car, userObj });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
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

  // POST Route: "/cars/u/:id"
  //  Edit car posting details
  router.post("/u/:id", (req, res) => {
    const carId = Number(req.params.id); //7
    const editingCar = req.body;
     console.log("editingCar from edit route", editingCar );
    carQueries
      .editCarById(editingCar, carId)
      .then(() => {
        res.redirect(`/cars/${carId}`);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // POST Route: "/cars/new"
  //  Add new car posting
  router.post("/new", (req, res) => {
    const loggedInUserId = Number(req.cookies.user_id);
    // console.log(req.body);

    const newCar = {
      owner_id: loggedInUserId,
      car_make: req.body.car_make || "",
      car_model: req.body.car_model || "",
      car_year: req.body.car_year || "",
      listing_price: req.body.listing_price * 100 || 0,
      car_photo_url: req.body.car_photo_url || "",
      description: req.body.description || "",
    };
    // console.log('parsed req body: ', newCar);
    //owner_id, car_make, car_model, car_year, listing_price, car_photo_url, description
    carQueries.addCar(newCar)
      .then((car) => {
        // console.log(car);
        res.redirect(`/cars/${car.id}`);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });



  // POST Route: "/cars/:id/delete"
  //  Delete a car posting
  router.post("/:id/delete", (req, res) => {
    const carIdToDelete = Number(req.params.id);
     carQueries.deleteCarbyId(carIdToDelete)
       .then(() => {
      res.redirect("/user/listings")
       })
      .catch((err) => {
      res.status(500).json({ error: err.message });
      });
  });



  // POST Route: "/cars/:id/sold"
  //  Mark car as sold
  router.post("/:id/sold", (req, res) => {
    // console.log(req.params)
    const car_id = Number(req.params.id);

    carQueries.makeCarSold(car_id)
      .then(car => {
        // console.log(car);
        res.redirect('/user/listings');
        // res.json({ cars });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // POST Route: "/cars/:id/active"
  //  Mark car as not sold
  router.post("/:id/active", (req, res) => {
    // console.log(req.params)
    const car_id = Number(req.params.id);

    carQueries.makeCarActive(car_id)
      .then(car => {
        // console.log(car);
        res.redirect('/user/listings');
        // res.json({ cars });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
