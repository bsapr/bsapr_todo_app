var db = require('../config/mongoose');
var Tododb  =  require('../models/todoform')


module.exports.todoform = function(req,res)
{  console.log("req body",req.body);
      Tododb.create({desc:req.body.tododesc,category:req.body.option,tododate:req.body.todo_date},function(err,newTodoForm){
        if(err)
        {
            console.log("error");
            return res.redirect('/');
           
        }
        console.log("data is",newTodoForm);
        return res.redirect('/');
    })
    
}