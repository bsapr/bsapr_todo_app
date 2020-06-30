const express = require('express');
const router = express.Router();
var db = require('../config/mongoose');
// var Tododb  =  require('../models/todoform')
console.log("In deletelist router index");
const deletelistontroller = require('../controllers/deletelist_controller')
router.post('/',deletelistontroller.deletelist);
module.exports =  router;