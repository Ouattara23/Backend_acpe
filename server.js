const express = require('express');
const connectDB = require('./config/db');
const app = express();
const port = 4000;
const path = require('path');
const model = require('./models/model'); // Import du modèle



//Connection à la base de données
connectDB();

app.set('view engine', 'ejs'); //liaison du moteur de template ejs

//préciser le dossier pour les fichiers static
app.use(express.static('publics'));
//app.use(express.static('enseignant'));
//app.use(express.static('parent'));



//Middleware qui permet de traiter les données la requête
app.use(express.json()); // Pour analyser les corps de requêtes JSON
app.use(express.urlencoded({ extended: true })); // Pour analyser les corps de requêtes URL-encoded


//les routers
app.use("/post", require("./routes/post.router"));

app.set('views', path.join(__dirname, 'views')); // Définit le dossier des vues

// Servir les fichiers statiques (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));


// Route pour "/post"
app.get('/', (req, res) => {
    res.render('index'); // Assure-toi d’avoir un fichier "views/post.ejs"
});

app.get('/parent', (req, res) => {
    res.render('parent'); // Assure-toi d'avoir un fichier views/parent.ejs
});

app.get('/enseignant', (req, res) => {
    res.render('enseignant'); // Assure-toi d'avoir un fichier views/enseignant.ejs
});

app.get('/contact', (req, res) => {
    res.render('contact'); // Assure-toi d'avoir un fichier views/contact.ejs
});


app.post('/inscription-ecole', async (req, res) => {
    try {
        const { 
            nom_ecole,
            logo_ecole,
            adresse_ecole,
            ville_ecole,
            code_postal_ecole,
            nom_enseignant,
            matiere_enseigne,
            niveaux_scolaires,
            email_admin,
            mot_de_passe,
            confirmer_mot_de_passe
         } = req.body;

        // Vérifier si l'école existe déjà
        const existingEcole = await model.findOne({ email });
        if (existingEcole) {
            return res.status(400).send('Cette école est déjà enregistrée.');
        }

        // Enregistrer dans la base de données
        const nouvelleModel = new Model({ 
            nom_ecole,
            logo_ecole,
            adresse_ecole,
            ville_ecole,
            code_postal_ecole,
            nom_enseignant,
            matiere_enseigne,
            niveaux_scolaires,
            email_admin,
            mot_de_passe,
            confirmer_mot_de_passe
         });
        await nouvelleModel.save();

        res.send('Inscription réussie');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});


app.get('/ecole', (req, res) => {
    res.render('ecole'); // Assure-toi d'avoir un fichier views/enseignant.ejs
});



//Démarrache du serveur
app.listen(port, () => console.log('Le serveur a démarré au port ' + port));