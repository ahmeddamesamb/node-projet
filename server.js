const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour analyser le corps des requêtes JSON
app.use(express.json());

// Exemple de route
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon API Express!');
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
