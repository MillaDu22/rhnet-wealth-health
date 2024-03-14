# React Modal Component

React Modal Component est un composant modal réutilisable pour les applications React. Il fournit une interface modale simple et personnalisable qui peut être facilement intégrée dans vos projets React.

## Installation

Pour installer React Modal Component, vous pouvez utiliser npm ou yarn :

- npm install react-modal-component

- yarn add react-modal-component

### Exemple d'utilisation

import React, { useState } from 'react';
import ModalComponent from 'react-modal-component';

function App() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button onClick={handleOpenModal}>Ouvrir la modal</button>
            <ModalComponent show={showModal} onClose={handleCloseModal} />
        </div>
    );
}

export default App;

### Proprétés
show (booléen) : Contrôle la visibilité de la modal.
onClose (fonction) : Fonction de rappel pour gérer l'événement de fermeture de la modal.

### Licence
React Modal Component est publié sous la licence MIT. Voir LICENSE pour plus de détails.



