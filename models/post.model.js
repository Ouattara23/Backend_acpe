const mongoose = require('mongoose');
const postSchema = new  mongoose.Schema({
     nom: {
         type: String,
         required: true     
    } ,
    email:{
         type: String,
         required: true      
    },
    telephone:{
         type: Number,
         required: true      
    },
    enfant:{
         type: String,
         required: true     
    },
    ecole:{
         type: String,
         required: true     
    },
    motDePasse:{
          type: Number,
          required: true
    }          
})
module.exports = mongoose.model('post', postSchema)