import React from 'react';
import './ModalComponent.css';

const ModalComponent = ({ show, onClose }) => {
    return (
        <div className={show ? 'modal fade show' : 'modal fade'} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" onClick={onClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">Employee created</div>
                    <div className="modal-footer"></div>
                </div>
            </div>
        </div>
    );
};

export default ModalComponent;
