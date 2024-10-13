import React from 'react'
import filmclip from '../assets/filmClip.png'
import popcorn from '../assets/Popcorn.png'
import shiny from '../assets/shinyobj.svg'
import logo from '../assets/logo.png'
import '../index.css';
import './Herosection.css';
import Input from './Input'



function Herosection() {
  return (
    <>
      <section className="herosection">
       <img src={logo} alt="logo" className='Logo'/>
        <div className="heroheading">
          <h3 id="secondaryheading">Journey Back To</h3>
          <h3 id="primaryheading">Cinematic Magic</h3>
          <img src={shiny} alt="shiny" className="textshinyobj" />
        </div>

        <img src={filmclip} alt="flimclip" className='HeroImages heroimg1'/>
        <img src={popcorn} alt="flimclip" className='HeroImages heroimg2' />
        <section className='HeroContent'><Input></Input></section>
      </section>
    </>

  )
}

export default Herosection