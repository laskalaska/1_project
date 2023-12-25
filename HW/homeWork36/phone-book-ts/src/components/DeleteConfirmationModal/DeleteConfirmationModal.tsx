import React from 'react';
import './DeleteConfirmationModal.css';

type DeleteConfirmationModalProps = {
    onRequestClose: () => void;
    onDelete: () => void;
}

function DeleteConfirmationModal({onRequestClose, onDelete}: DeleteConfirmationModalProps) {
    return (
        <div className="modal">
            <div className="modal-content">
            <h2>Are you sure you want to delete?</h2>
                <div className="modal-buttons">
            <button onClick={onDelete}>Delete</button>
            <button onClick={onRequestClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
export default DeleteConfirmationModal;