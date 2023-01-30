const express = require('express');
const router = express.Router();

// define the Inicio route
router.get('/', function(req, res) {
  res.render('InicioV.ejs');
});

module.exports = router;