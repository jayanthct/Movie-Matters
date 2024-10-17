import React from 'react'
import filmclip from '../assets/filmClip.png'
import popcorn from '../assets/Popcorn.png'
import shiny from '../assets/shinyobj.svg'
import logo from '../assets/logo.png'
import '../index.css';
import './Herosection.css';
import Input from './Input'




function Herosection({search,bool}) {
  return (
    <>
      <section className="herosection">
       <img src={logo} alt="logo" className='Logo'/>
        <div className="heroheading">
          <h3 id="secondaryheading">Journey Back To</h3>
          <h3 id="primaryheading"><span id='firstletterheading'>Cinematic&nbsp;</span> <span id='secondletterheading'>Magic</span></h3>
          <p id="caption">Discover your next favorite film. Search Title explore movies from around the world.</p>
          <img src={shiny} alt="shiny" className="textshinyobj" />
        </div>

        <img src={filmclip} alt="flimclip" className='HeroImages heroimg1'/>
        <img src={popcorn} alt="flimclip" className='HeroImages heroimg2' />
        <section className='HeroContent'><Input bool={bool} search={search}></Input></section>
      </section>
    </>

  )
}

export default Herosection