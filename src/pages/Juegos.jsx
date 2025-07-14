import React, { useEffect, useState } from 'react'
import { JuegoItem } from '../components/juegos/JuegoItem';
import { useNavigate, useParams } from 'react-router-dom';
export const Juegos = () => {

  const [listaJuegos, SetListaJuegos] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  const { page } = useParams();
  const navigate = useNavigate();

  const currentPage = parseInt(page) || 1;

  const getJuegosApi = async (page) => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=957f6a2b15fa49f68a9bb400ac60e7f0&page=${page}&page_size=20&exclude_additions=true`);
      const data = await response.json();
      SetListaJuegos(data.results);
      console.log(data.results)
    } catch (error) {
      console.error("Error fetching games:", error);
    }
    finally {
      setShowLoading(false)
      window.scrollTo(0, 0)
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
    setShowLoading(true)
    getJuegosApi(currentPage);
  }, [currentPage])


  const nextPage = () => {
    navigate(`/juegos/pag/${currentPage + 1}`);
  }

  const backPage = () => {
    if (currentPage > 1) {
      navigate(`/juegos/pag/${currentPage - 1}`);
    }
  }


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
              {/* <div className='bubble'></div>
              <div className='bubble b-1'></div> */}
              <div className='juegos_list_btns'>
                <button onClick={backPage} className={currentPage === 1 ? 'hidden' : ''}>{currentPage > 1 ? currentPage - 1 : ''}</button>
                <h4>{currentPage}</h4>
                <button onClick={nextPage}>{currentPage + 1}</button>
              </div>
            </div>
          )
        )
      }
    </section>
  )
}