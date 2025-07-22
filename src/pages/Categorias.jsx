import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Categorias = () => {
  const [genres, setGenres] = useState(null)

  const getGenres = async () => {
    try {
      const response = await fetch('https://api.rawg.io/api/genres?key=957f6a2b15fa49f68a9bb400ac60e7f0');
      const genreList = await response.json();
      setGenres(genreList.results);
    }
    catch {
      console.error('Error fetching the genres!')
    }
  }

  useEffect(() => {
    getGenres();
  }, [])

  return (
    <section className="categorias">
      {genres ? (
        <>
          <h1>Explorá por categoría</h1>
          <ul className="categorias_list">
            {genres.map((x) => (
              <li className="categorias_list_item" key={x.id}><NavLink to={`/categorias/page/1/${x.slug}`}>{x.name}</NavLink></li>
            ))}
          </ul>
        </>
      )
        :
        <div className='juegos_loading'>
          <h2 className='degrade' data-text='Cargando...'>Cargando...</h2>
        </div>
      }
      <div className='bubble'></div>
      <div className='bubble b-1'></div>
    </section>
  );
}