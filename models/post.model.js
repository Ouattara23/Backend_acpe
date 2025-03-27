const mongoose = require('mongoose');
const postSchema = new  mongoose.Schema({
     nom_ecole: {
         type: String,
         required: true     
    } ,
    logo_ecole:{
         type: String,
         required: true      
    },
    adresse_ecole:{
         type: Number,
         required: true      
    },
    ville_ecole:{
         type: String,
         required: true     
    },
    code_postal_ecole:{
         type: String,
         required: true     
    },
    nom_enseignant:{
        type: String,
        required: true
    },  
    
    matiere_enseigne:{
     type: String,
     required: true
    },
    
    niveaux_scolaires:{
        type: String,
        required: true
  },        


  email_admin:{
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Veuillez entrer une adresse email valide"]
},        


mot_de_passe:{
    type: Number,
    required: true
},        


confirmer_mot_de_passe:{
    type: Number,
    required: true
}

});

module.exports = mongoose.model('post', postSchema);
