# RHNET-WEALTH-HEALTH

![Description de l'image](/src/Assets/images/Home1.png)
![Description de l'image](/src/Assets/images/Home2.png)
![Description de l'image](/src/Assets/images/Home3.png)
![Description de l'image](/src/Assets//images//Form1.png)
![Description de l'image](/src/Assets//images//Form2.png)
![Description de l'image](/src/Assets//images//Form3.png)

conversion d’une application de jQuery vers React.

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`

### `npm run eject`

## Technologies

Node v21.6.1, 

npm 10.8.2 , 

@babel/core: ^7.24.4,

@reduxjs/toolkit: ^2.2.1,

@testing-library/jest-dom: ^5.17.0,

@testing-library/react: ^13.4.0,

@testing-library/user-event: ^13.5.0,

babel-loader: ^9.1.3,

react": ^18.2.0,

react-calendar: ^4.8.0,

react-dom": ^18.2.0,

react-icons: ^5.0.1,

react-modale-by-ldla: ^0.1.1,

react-redux: ^9.1.0,

react-router: ^6.22.3,

react-router-dom: ^6.22.3,

react-scripts: ^5.0.1,

react-select: ^5.8.0,

react-table: ^7.8.0,

reactstrap: ^9.2.2,

redux: ^5.0.1,

redux-persist: ^6.0.0,

## Learn More

Cette société utilisait une application web interne, appelée HRnet, qui gère les dossiers des employés.

L'application était ancienne et utilise jQuery côté front end, ce qui entraînait des bugs considérables et une augmentation des plaintes en interne.

Mon équipe de développement s'efforçait depuis un certain temps déjà de mettre à niveau l'application.  

La direction nous a enfin laisser mettre à jour HRnet et le convertir en React ! 

Les plus gros problèmes pour les utilisateurs de HRnet étaient les sélecteurs de date, les fenêtres modales, les menus déroulants et les tableaux.

Nous avions reçu plusieurs plaintes disant que ces plugins jQuery sont très lents.  

Nous avons donc créer nos propres composants React à la place de ces plugins jQuery tiers qui sont utilisés dans l'interface utilisateur. La conversion de ces plugins jQuery en composants React améliore les performances et la stabilité.  

Voici la listes des plugins jQuery utilisés qui devaient être convertis : 

Plugin de sélection de date
Plugin de fenêtre modale - jQuery.modal.js
Menus déroulants
Plugin pour les tables de données

Je suis chargée pour ma part de convertir toute l'application en React, de documenter le code et de créer mon propre composant modale publié sur npm sous forme de package. Ce composant doit etre documenté également.
Il est nécessaire aussi de faire des comparaisons de performance entre avant et après.

## Link old repository

le repository vers la version jquery: https://github.com/OpenClassrooms-Student-Center/P12_Front-end

## Links new repositories

le repository package npm : https://github.com/MillaDu22/react-modale-by-ldla

le repository  RhNet convertit React : https://github.com/MillaDu22/rhnet-wealth-health

## Link deployed app

la GhPage: https://milladu22.github.io/rhnet-wealth-health/