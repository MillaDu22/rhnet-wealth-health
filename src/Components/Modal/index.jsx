import React from 'react';
import "./Modal.css";

function Modal() {
    return(
        <div>
            <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" id="exampleModalLabel">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">Employee created</div>
                        <div className="modal-footer"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;