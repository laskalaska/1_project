import React from 'react';
import Modal from "react-modal";
import './DeleteConfirmationModal.css';

function DeleteConfirmationModal({onRequestClose, onDelete}) {
    return (
        <div className="modal">
            <div className="modal-content">
            <h2>Are you sure you want to delete?</h2>
            <button onClick={onDelete}>Delete</button>
            <button onClick={onRequestClose}>Cancel</button>
            </div>
        </div>
    );
}
// function DeleteConfirmationModal({isOpen, onRequestClose, onDelete}) {
//     return (
//         <Modal isOpen={isOpen}
//                onRequestClose={onRequestClose}
//                contentLabel="Delete Confirmation"
//                style={{
//                    overlay: {
//                        position: 'absolute',
//                        justifyContent: 'center',
//                        alignItems: 'center',
//                        display: 'flex',
//                        top: 0,
//                        left: 0,
//                        right: 0,
//                        bottom: 0,
//                        backgroundColor: 'rgba(255, 255, 255, 0.75)'
//                    },
//                    content: {
//                        position: 'unset',
//                        top: '40px',
//                        left: '40px',
//                        right: '40px',
//                        bottom: '40px',
//                        border: '1px solid #ccc',
//                        background: '#fff',
//                        overflow: 'auto',
//                        WebkitOverflowScrolling: 'touch',
//                        borderRadius: '4px',
//                        outline: 'none',
//                        padding: '20px'
//                    }
//                }}
//         >
//             <h2>Are you sure you want to delete?</h2>
//             <button onClick={onDelete}>Delete</button>
//             <button onClick={onRequestClose}>Cancel</button>
//         </Modal>
//     );
// }

export default DeleteConfirmationModal;