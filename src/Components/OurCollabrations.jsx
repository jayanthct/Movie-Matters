import React from 'react'
import company1 from '../assets/sony pictures.png'
import company2 from '../assets/universal.png'
import company3 from '../assets/marvel.png'
import company4 from '../assets/warner bros.png'
import company5 from '../assets/lionsgate.png'
import './OurCollabrations.css';

function OurCollabrations() {
    return (
        <>
            <div className="Ourcollabrations">

                <div className="Ourcollabheadings">
                    <span>Our</span><span id='secondword'>Collabrations</span>

                </div>

                <div className="companys">
                    <img src={company1} alt="Companys" className="comany1" />
                    <img src={company2} alt="Companys" className="comany2" />
                    <img src={company3} alt="Companys" className="comany3" />
                    <img src={company4} alt="Companys" className="comany4" />
                    <img src={company5} alt="Companys" className="comany5" />
                </div>
            </div>
        </>
    )
}

export default OurCollabrations