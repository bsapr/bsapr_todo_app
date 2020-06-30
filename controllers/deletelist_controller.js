var db = require('../config/mongoose');
//var Deletelistdb  =  require('../models/deletelist')

var Tododb  =  require('../models/todoform')
module.exports.deletelist = function(req,res)
{  console.log("deletelist body",req.body);



for(let id of req.body.deletelist)
{    console.log("deletelist id",id);
    Tododb.findOneAndDelete(id, function(err){
        if(err){
            console.log('error in deleting the object');
            return;
        }
      
    });
}



return res.redirect('back');

}
// Deletelistdb.create({deletelist_id:req.query.deletelist},function(err,newdeletelist){
//         if(err)
//         {
//             console.log(err);
//             return;
//         }
//         console.log("data is",newdeletelist);
//         return res.redirect('/');
//     })
    
