const { Telegraf } = require('telegraf');
const express = require('express');
const fs = require('fs');
const path = require('path');
const Groq = require('groq-sdk');

const MatriceGroq = require('./app/init/Matrice_groq-min.js');
const pressKit = require ('./user-cv.JS');

const telegrafUser= "io";

const objectif = `{
    "project": "Starseed",
    "description": "Plateforme révolutionnaire combinant IA, blockchain et créativité artistique",
    "pillars": [
    {
    "name": "Intelligence Artificielle",
    "description": "Utilisation de TensorFlow.js pour les recommandations et suggestions d'art",
    "benefits": "Expérience personnalisée pour les utilisateurs et meilleure visibilité pour les artistes"
    },
    {
    "name": "Blockchain",
    "description": "Utilisation de la blockchain Ethereum pour gérer la propriété, les transactions et le crowdfunding",
    "benefits": "Transparence, sécurité et automatisation des transactions"
    },
    {
    "name": "Jardins de l'Univers",
    "description": "Représentation des projets artistiques qui poussent grâce à la plateforme",
    "benefits": "Ecosystème dynamique et interactif pour les artistes, les collectionneurs et les investisseurs"
    }
    ],
    "plan": [
    {
    "step": "Développement du Front-end",
    "tasks": [
    "Création de l'interface utilisateur",
    "Intégration de HubSpot",
    "Utilisation de HTML, SCSS, JS, ASCII/SVG et XML"
    ]
    },
    {
    "step": "Développement du Back-end",
    "tasks": [
    "Mise en place de l'API",
    "Gestion des données",
    "Sécurisation du serveur SSH",
    "Utilisation de Node.js, Groq-SDK et SQL"
    ]
    },
    {
    "step": "Intégration de l'IA",
    "tasks": [
    "Développement d'algorithmes d'apprentissage automatique et de recommandation",
    "Utilisation de TensorFlow.js"
    ]
    },
    {
    "step": "Intégration de la Blockchain",
    "tasks": [
    "Interaction avec la blockchain Ethereum",
    "Création de contrats intelligents",
    "Utilisation de Web3.js"
    ]
    },
    {
    "step": "Test et Déploiement",
    "tasks": [
    "Tests complets de l'application et du système de blockchain",
    "Déploiement en production",
    "Surveillance continue pour assurer la stabilité et la sécurité"
    ]
    }
    ]
    }`;
    
