const mongoose= require('mongoose');
console.log("in deletelist model class")
const deletelistschema =  new mongoose.Schema(
    {
        deletelist_id:{
            type:String,
            required:true
        }
    }
);

const   Deletelistdb =  mongoose.model('Deletelistdb',deletelistschema);
module.exports=Deletelistdb;


