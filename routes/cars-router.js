const express = require('express');
const router = express.Router();
const sampleUsersQuery = require('../db/sample-users-query');

//GET /cars/
router.get('/', (req, res) => {
  sampleUsersQuery.getUsers()
    .then((users) => {
      res.json(users);
    })
    .catch(err => err.mesage);
});

modules.exports = {
  router
};
