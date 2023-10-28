const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true            // these are when user enter email id they save in lowercase
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('user',userSchema);