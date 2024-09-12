const path = require('path');

module.exports = {
    entry: './src/index.js', // Point d'entrée de ton application
    output: {
        path: path.resolve(__dirname, 'dist'), // Dossier de sortie pour les fichiers bundle
        filename: 'bundle.js', // Nom du fichier bundle généré
        publicPath: '/'
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/, // Fichiers à traiter avec Babel (JS et JSX)
            exclude: /node_modules/, // Exclure le dossier node_modules
            use: {
            loader: 'babel-loader', // Utiliser Babel pour la transformation
            },
        },
        {
            test: /\.css$/, // Gestion des fichiers CSS
            use: ['style-loader', 'css-loader'], // Charger et injecter le CSS
        },
        {
            test: /\.(png|svg|jpg|gif)$/, // Gestion des images
            use: ['file-loader'], // Charger les fichiers d'image
        },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Extensions reconnues
    },
    devServer: {
        static: path.join(__dirname, 'public'), // Dossier pour les fichiers statiques
        compress: true,
        port: 3000, // Port du serveur de développement
        historyApiFallback: true, // Pour le support du routing côté client
    },
};
