import React, { useState } from 'react';
import ModalComponent from 'votre-package-modal';

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
            <button onClick={handleOpenModal}>Open Modal</button>
            <ModalComponent show={showModal} onClose={handleCloseModal} />
        </div>
    );
}

export default App;
