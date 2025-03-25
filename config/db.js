const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://yah64:Rach01@hackathon.mongodb.net/hackathon_2?retryWrites=true&w=majority";

// Vérifier si l'URI est bien définie
console.log("MONGO_URI:", MONGO_URI);

   const connectDB = async () => {
      try {
         mongoose.set('strictQuery', false);
         await mongoose.connect('mongodb+srv://yah64:Rach01@hackathon.btwwu.mongodb.net/', {
      });
         console.log('MongoDB Connecté');
      } catch (err) {
         console.error(err.message);
         //process.exit(1); // Arrête le processus en cas d'erreur de connexion
      }
   };

module.exports = connectDB;