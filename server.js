// load .env data into process.env
require("dotenv").config();

// Require cookie-parser
const cookieParser = require('cookie-parser');
const session = require('express-session');

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
  );

  app.use(express.static("public"));

  // Load cookie-parser and session.
  app.use(cookieParser())
  app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: "anyrandomstring",
      })
    );

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const carsRoutes = require("./routes/cars-router");
const usersRoutes = require("./routes/user-router");
const conversationsRoutes = require("./routes/conversations-router");
const aboutPageRoutes = require("./routes/about");
const favouritesPageRoutes = require("./routes/favourites-router");

// Mount all resource routes
app.use("/cars", carsRoutes());
app.use("/user", usersRoutes());
app.use("/conversations", conversationsRoutes());
app.use("/about", aboutPageRoutes());
app.use("/favourites", favouritesPageRoutes());
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.redirect('/cars');
  // res.render("index");
});


// Implement Login/Register fuctions later.
// Do this instead for now:
// use 'req.cookies.user_id' later to access logged in user.
app.get('/login/:id', (req, res) => {
  // cookie-session middleware
  req.session.user_id = req.params.id;

  // cookie-parser middleware
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
