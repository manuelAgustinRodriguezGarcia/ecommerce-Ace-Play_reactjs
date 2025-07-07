import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Juegos } from '../../pages/Juegos';

export const JuegoData = () => {
  const { id } = useParams();
  
  const [juego, setJuego] = useState(null);
  const [showLoading, setShowLoading] = useState(true);

  const getJuego = async() => {
    try{
      const response = await fetch(`https://api.rawg.io/api/games/${id}?key=957f6a2b15fa49f68a9bb400ac60e7f0`);
      const data = await response.json();
      setJuego(data);
      console.log(data);
    }
    catch (error){
      console.error("Error fetching games:", error)
    }
    finally {
      setShowLoading(false)
    }
  }

  useEffect( () => {
    window.scrollTo(0,0)
    setShowLoading(false)
    getJuego();
  },[]);

  return (
    <section className='data'>
      {juego ? 
      <section className='data_juego'>
        <div className='data_juego_info'>
          <h1>{juego.name}</h1>
          <p>{juego.description_raw}</p>
        </div>
      </section>
      : 
      <div className='juegos_loading'>
        <h2 className='degrade' data-text='Cargando...'>Cargando...</h2>
      </div>
      }
    </section>
  )
}