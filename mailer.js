require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Ton adresse email
        pass: process.env.EMAIL_PASS  // Mot de passe ou App Password
    }
});

const sendWelcomeEmail = async (email, nom, motDePasse) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Bienvenue à notre école - Vos accès',
            html: `
                <h2>Bonjour ${nom},</h2>
                <p>Votre compte enseignant a été créé avec succès.</p>
                <p>Voici vos informations de connexion :</p>
                <ul>
                    <li><strong>Email :</strong> ${email}</li>
                    <li><strong>Mot de passe :</strong> ${motDePasse}</li>
                </ul>
                <p>Veuillez changer votre mot de passe après votre première connexion.</p>
                <p>Cordialement,</p>
                <p><strong>L'équipe de l'école</strong></p>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log("✅ Email envoyé à", email);
    } catch (error) {
        console.error("❌ Erreur d'envoi d'email :", error);
    }
};

module.exports = sendWelcomeEmail;
