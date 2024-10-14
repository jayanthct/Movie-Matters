import React, { useState } from 'react'
import './Input.css';
import searchicon from '../assets/search-line.svg'

function Input({search}) {
    const [searchmovie,setsearchmovie]= useState('');
    const handlesubmit=()=>{
        search(searchmovie);
    }
    return (
        <>
            <div className="Inputfield">

                <input type="text" className='Input' placeholder='Ex: Spiderman' value={searchmovie} onChange={(e)=>{setsearchmovie(e.target.value)}}/>
                <button id="PrimaryButton" onClick={handlesubmit}>
                    <p>Submit</p>
                    <img src={searchicon} alt="searchicon" />
                </button>

            </div>
        </>
    )
}

export default Input