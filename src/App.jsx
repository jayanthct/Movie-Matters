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
        <OurCollabrations />  
        <MovieCard Title="Spiderman" descrption="Hello world"></MovieCard>
      </section>
    </>
  )
}

export default App