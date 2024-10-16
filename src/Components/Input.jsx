import React, { useState } from 'react';
import './Input.css';
import searchicon from '../assets/search-line.svg';

function Input({ search, bool }) {
    const [searchmovie, setsearchmovie] = useState('');

    const handleSubmit = () => {
        bool(true);
        search(searchmovie);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(); // Call the handleSubmit function properly
        }
    };

    return (
        <>
            <div className="Inputfield">
                <input 
                    type="text" 
                    className='Input' 
                    placeholder='Ex: Spiderman' 
                    value={searchmovie} 
                    onChange={(e) => setsearchmovie(e.target.value)} 
                    onKeyDown={handleKeyDown} // Triggers handleSubmit on Enter key press
                />
                <button id="PrimaryButton" onClick={handleSubmit}>
                    <p>Submit</p>
                    <img src={searchicon} alt="searchicon" />
                </button>
            </div>
        </>
    );
}

export default Input;
