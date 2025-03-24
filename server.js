const express = require('express');
const app = express();
const connectDB = require('./config/db');
const port = 4000;

//Connection à la base de données
connectDB();

app.set('view engine', 'ejs'); //liaison du moteur de template ejs

//préciser le dossier pour les fichiers static
app.use(express.static('publics'));
app.use(express.static('enseignant'));
app.use(express.static('parent'));



//Middleware qui permet de traiter les données la requête
app.use(express.json()); // Pour analyser les corps de requêtes JSON
app.use(express.urlencoded({ extended: true })); // Pour analyser les corps de requêtes URL-encoded

//les routers
app.use("/post", require("./routes/post.router"));

// Ajout de la route pour "/"
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/parent', (req, res) => {
    res.render('parent');
});

//Démarrache du serveur
app.listen(port, () => console.log('Le serveur a démarré au port ' + port));