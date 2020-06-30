var db = require('../config/mongoose');
var Tododb  =  require('../models/todoform')

module.exports.home = function(req,res)
{    console.log("home controller");

Tododb.find({}, function(err, todolist_db){
    if(err){
        console.log("error in fetching todo list from db");
        return;
    }
    return res.render('todo',{
        
        todolist: todolist_db
    });

})

   
}