const express = require('express');
const router = express.Router();
console.log("In router index");
const homeController = require('../controllers/home_controller')
router.get('/',homeController.home);
router.use('/todo-form',require('./todoform'));
router.use('/deletelist',require('./deletelist'));
module.exports =  router;