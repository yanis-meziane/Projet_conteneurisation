# Boxletter - Application de notation de films

Application web permettant aux utilisateurs de noter des films et aux administrateurs de gérer le catalogue.

## Prérequis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- [Docker](https://www.docker.com/) et Docker Compose
- [Git](https://git-scm.com/)

## 🚀 Installation

1. **Clonage du projet**
```bash
git clone https://github.com/yanis-meziane/Projet_conteneurisation.git
cd Projet_conteneurisation
```

2. **Installation des dépendances**
```bash
# Dépendances du frontend
npm install

# Dépendances du backend
cd backend
npm install
cd ..
```

## Lancement de l'application

### Option 1 : Avec Docker Compose 
```bash
docker compose up
```

L'application sera accessible sur `http://localhost:3000`

### Option 2 : Lancement manuel

**Terminal 1 - Backend :**
```bash
cd backend
node server.js
```

**Terminal 2 - Frontend :**
```bash
npm start
```

## Identifiants de test

### Compte Administrateur
- **Email** : `admin@boxletter.com`
- **Mot de passe** : `Admin123!@#`

### Compte Utilisateur
- **Email** : `jean.dupont@example.com`
- **Mot de passe** : `User123!@#`

## Architecture

- **Frontend** : React (port 3000)
- **Backend** : Node.js/Express (port 3001)
- **Base de données** : Fichiers JSON (users.json, movies.json)

## Images Docker

- **Frontend** : [hellfir/boxletter-frontend](https://hub.docker.com/repository/docker/hellfir/boxletter-frontend/general)
- **Backend** : [hellfir/boxletter-backend](https://hub.docker.com/repository/docker/hellfir/boxletter-backend/general)

## Structure du projet
```
.
├── backend/
│   ├── server.js
│   ├── users.json
│   ├── movies.json
│   └── Dockerfile
├── src/
│   ├── HomePage/
│   ├── Login/
│   ├── Register/
│   ├── admin/
│   └── main/
└── docker-compose.yml
```

## Fonctionnalités

### Utilisateur
- Inscription et connexion
- Consultation du catalogue de films
- Notation des films (1 à 5 étoiles)
- Visualisation de la note moyenne

### Administrateur
- Ajout de nouveaux films
- Suppression de films
- Visualisation des statistiques de notation



## Ressources

- [Dépôt GitHub principal](https://github.com/yanis-meziane/Projet_conteneurisation.git)
- [Travaux pratiques](https://github.com/yanis-meziane/Conteneurisation.git)

## Auteur

Yanis Meziane