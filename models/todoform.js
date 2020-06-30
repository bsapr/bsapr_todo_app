const mongoose= require('mongoose');
const todoSchema =  new mongoose.Schema(
    {
        desc:{
            type:String,
            required:true
        },
        category:{
            type:String,
            require:true
        },
        tododate:{
            type:String,
            require:true
        }
    }
);

const   Tododb =  mongoose.model('Tododb',todoSchema);
module.exports=Tododb;


