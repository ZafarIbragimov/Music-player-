import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GenreModal.css';

const GenreModal = ({ show, onClose }) => {
    const navigate = useNavigate();

    const handleGenreClick = (genre) => {
        navigate(`/genre/${genre}`);
    };

    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Genres</h2>
                <ul>
                    <button onClick={() => handleGenreClick('pop')}>Pop</button>
                    <button onClick={() => handleGenreClick('rock')}>Rock</button>
                    <button onClick={() => handleGenreClick('hip-hop')}>Hip-hop</button>
                    <button onClick={() => handleGenreClick('jazz')}>Jazz</button>
                    <button onClick={() => handleGenreClick('classical')}>Classical</button>
                </ul>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default GenreModal;
