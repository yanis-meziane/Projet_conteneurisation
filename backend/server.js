const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Route de connexion
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    
    try {
        
        const usersData = JSON.parse(
            fs.readFileSync(path.join(__dirname, 'users.json'), 'utf8')
        );
        
       
        const user = usersData.users.find(
            u => u.email === email && u.password === password
        );
        
        if (user) {
            res.json({
                success: true,
                userId: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                type: user.type
            });
        } else {
            res.json({
                success: false,
                message: 'Email ou mot de passe incorrect'
            });
        }
    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).json({
            success: false,
            message: 'Erreur du serveur'
        });
    }
});

// Route d'inscription
app.post('/api/register', (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    
    try {
        // Lire le fichier users.json
        const usersData = JSON.parse(
            fs.readFileSync(path.join(__dirname, 'users.json'), 'utf8')
        );
        
        // Vérifier si l'email existe déjà
        const emailExists = usersData.users.some(u => u.email === email);
        
        if (emailExists) {
            return res.json({
                success: false,
                message: 'Cet email est déjà utilisé'
            });
        }
        
        // Créer le nouvel utilisateur
        const newUser = {
            id: usersData.users.length + 1,
            firstname,
            lastname,
            email,
            password,
            type: 'user' // Par défaut, tous les nouveaux utilisateurs sont de type "user"
        };
        
        // Ajouter l'utilisateur
        usersData.users.push(newUser);
        
        // Sauvegarder dans le fichier
        fs.writeFileSync(
            path.join(__dirname, 'users.json'),
            JSON.stringify(usersData, null, 2)
        );
        
        res.json({
            success: true,
            message: 'Inscription réussie'
        });
        
    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).json({
            success: false,
            message: 'Erreur du serveur'
        });
    }
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});