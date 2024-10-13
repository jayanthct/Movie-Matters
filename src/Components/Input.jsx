import React from 'react'
import './Input.css';
import searchicon from '../assets/search-line.svg'

function Input() {
    return (
        <>
            <div className="Inputfield">

                <input type="text" className='Input' placeholder='Ex: Spiderman' />
                <div id="PrimaryButton" type="button">
                    <p>Submit</p>
                    <img src={searchicon} alt="searchicon" />
                </div>

            </div>
        </>
    )
}

export default Input