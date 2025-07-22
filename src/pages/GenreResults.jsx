import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { JuegoItem } from '../components/juegos/JuegoItem';

export const GenreResults = () => {
  const { page } = useParams();
  const { query } = useParams();

  const [games, setGames] = useState(null);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0)
    setShowLoading(true)
    getGamesByGenre()
  }, [page])

  const getGamesByGenre = async () => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=957f6a2b15fa49f68a9bb400ac60e7f0&genres=${query}&page=${page}&page_size=20&exclude_additions=true`);
      const genreGames = await response.json()
      setGames(genreGames.results)
      console.log(genreGames.results);
    }
    catch {
      console.error('Error fetching games by genre!')
    }
    finally {
      setShowLoading(false);
    }
  }

  return (
    <section className='results'>
      {showLoading || games.length === 0 ? (
        <div className='juegos_loading'>
          <h2 className='degrade' data-text='Cargando...'>Cargando...</h2>
        </div>
      ) :
        <div className='results_cont'>
          <h2>Juegos del género: <span className='degrade' data-text={query.toUpperCase()}>{query.toUpperCase()}</span></h2>
          <div className='results_cont_list'>
            {games.map((x) => <JuegoItem key={x.id} data={x} page={page}></JuegoItem>)}
          </div>
          <div className='results_pages'>
            {page > 1 ? <NavLink to={`/categorias/page/${parseInt(page) - 1}/${query}`}>{parseInt(page) - 1}</NavLink> : <h3 className='hidden'></h3>}
            <h3>{page}</h3>
            <NavLink to={`/categorias/page/${parseInt(page) + 1}/${query}`}>{parseInt(page) + 1}</NavLink>
          </div>
        </div>
      }
    </section>
  )
}