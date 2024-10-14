import { useEffect, useState } from 'react'
import Herosection from './Components/Herosection'
import OurCollabrations from './Components/OurCollabrations'
import CardGrid from './Components/CardGrid'
import './App.css'
import PaginationRounded from './Components/Pagination'

function App() {
  const url = "http://www.omdbapi.com/?i=tt3896198&apikey=5befd8b2"
  const [movie, setmovie] = useState([]);
  const [isInputed, setboolean] = useState(false);

  const search = async (title) => {
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
    setmovie(data.Search);
  }

  return (
    <>
      <section className="APP">
        <Herosection bool={setboolean} search={search} />
        <CardGrid bool={isInputed} list={movie}></CardGrid>
        {isInputed==false||movie&&movie.length==0?
          (<OurCollabrations />):(null)}
      </section>
    </>
  )
}

export default App