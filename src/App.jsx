import React from 'react'
import Herosection from './Components/Herosection'
import OurCollabrations from './Components/OurCollabrations'
import MovieCard from './Components/MovieCard'
import './App.css'

function App() {
  return (
    <>
      <section className="APP">
        <Herosection />
        <MovieCard Title="Spiderman" year="1990" director="SS Rajamouli"></MovieCard>
        <OurCollabrations />  
      </section>
    </>
  )
}

export default App