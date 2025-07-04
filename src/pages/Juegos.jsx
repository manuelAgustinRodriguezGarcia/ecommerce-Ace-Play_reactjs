import React, { useEffect, useState } from 'react'
import { JuegoItem } from '../components/JuegoItem';
import { NavLink } from 'react-router-dom';

/*
Action
Indie
Adventure
roleplay_games
Strategy
Shooter
Casual
Simulation
Puzzle
Arcade
Platformer
Massively Multiplayer
Racing
Sports
Fighting
Family
Board Games
Card
Educational
*/
export const Juegos = () => {

  const [listaJuegos, SetListaJuegos] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  const getJuegosApi = async () => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=957f6a2b15fa49f68a9bb400ac60e7f0&page_size=25`);
      const data = await response.json();
      SetListaJuegos(data.results);
      console.log(data.results);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  }
  useEffect(() => {
    getJuegosApi();
    setTimeout(() => {
      setShowLoading(false)
    }, 1000);
  }, [])

  return (
    <section className='juegos'>
      {showLoading || listaJuegos.length === 0 ? (
        <div className='juegos_loading'>
          <h2 className='degrade' data-text='Cargando...'>Cargando...</h2>
        </div>
      ) :
        (
          listaJuegos && listaJuegos.length > 0 &&
            (
              <div className='juegos_list'>
                {listaJuegos.map((juego) =>
                (<JuegoItem key={juego.id} data={juego} />
                ))}
                <div className='bubble'></div>
                <div className='bubble b-1'></div>
                <div className='juegos_list_btns'>
                  <NavLink to='/categorias'>2</NavLink>
                  <h4>3</h4>
                  <NavLink to='/categorias'>4</NavLink>
                </div>
              </div>
            )

        )
      }
    </section>
  )
}