import React from 'react';
import { Link } from "react-router-dom"

export default function Main(){
    return(
        <div>
            <h1>Bienvenue</h1>
            <p>Ceci est la page d'accueil de Boxletter</p>
            <p>Si vous avez un compte, <Link to="/login">connectez-vous</Link>.</p>
            <p>Si vous n'avez pas de compte <Link to="/register">Inscrivez vous</Link></p>
        </div>
    )
}