import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './GenreList.css';

const GenreList = () => {
    const { genre } = useParams();
    const navigate = useNavigate();

    const musicList = {
        pop: ['Pop Song 1', 'Pop Song 2'],
        rock: ['Rock Song 1', 'Rock Song 2'],
        'hip-hop': ['Hip-hop Song 1', 'Hip-hop Song 2'],
        jazz: ['Jazz Song 1', 'Jazz Song 2'],
        classical: ['Classical Song 1', 'Classical Song 2'],
    };

    return (
        <div className="genre-list-container">
            <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            <h2>{genre.charAt(0).toUpperCase() + genre.slice(1)} Music</h2>
            <ul>
                {musicList[genre].map((song, index) => (
                    <li key={index} className="genre-list-item">
                        <div className="music-avatar">🎵</div>
                        <div className="music-details">
                            <p className="music-title">{song}</p>
                            <p className="music-artist">Artist Name</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenreList;
