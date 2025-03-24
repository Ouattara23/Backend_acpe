const mongoose = require("mongoose");

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