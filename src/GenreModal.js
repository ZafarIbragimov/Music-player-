import React from 'react';
import './GenreModal.css';

const GenreModal = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Genres</h2>
                <ul>
                    <button>
                         Pop
                    </button>
                    <button>
                         Rock
                    </button>
                    <button>
                         Hip-hop
                    </button>
                    <button>
                         Jazz
                    </button>
                    <button>
                         Classical
                    </button>
                </ul>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default GenreModal;
