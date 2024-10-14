import {useEffect,useState} from 'react'
import Herosection from './Components/Herosection'
import OurCollabrations from './Components/OurCollabrations'
import CardGrid from './Components/CardGrid'
import './App.css'

function App() {
  const url="http://www.omdbapi.com/?i=tt3896198&apikey=5befd8b2"
  const [movie,setmovie]=useState([]);

  const search =async (title)=>{
    const response = await fetch(`${url}&s=${title}`);
    const data =await response.json();
  
    console.log(data.Search);
    setmovie(data.Search);
  }

  return (
    <>
      <section className="APP">
        <Herosection search={search}/>
        <CardGrid list={movie}></CardGrid>
        <OurCollabrations />  
      </section>
    </>
  )
}

export default App