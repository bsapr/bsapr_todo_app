
const express = require('express');
const router = express.Router();
var db = require('../config/mongoose');
var Tododb  =  require('../models/todoform')
console.log("In todo router index");
const todoformController = require('../controllers/todoform_controller')
router.post('/',todoformController.todoform);
module.exports =  router;