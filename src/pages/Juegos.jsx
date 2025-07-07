import React, { useEffect, useState } from 'react'
import { JuegoItem } from '../components/juegos/JuegoItem';
export const Juegos = () => {

  const [listaJuegos, SetListaJuegos] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  const [pageNum, setPageNum] = useState(1);

  const getJuegosApi = async (page = pageNum) => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=957f6a2b15fa49f68a9bb400ac60e7f0&page=${page}&page_size=20`);
      const data = await response.json();
      SetListaJuegos(data.results);
      console.log(data.results)
    } catch (error) {
      console.error("Error fetching games:", error);
    }
    finally {
      setShowLoading(false)
    }
  }
  useEffect(() => {
    getJuegosApi();
    setShowLoading(true)
    window.scrollTo(0, 0)
  }, [pageNum])


  const nextPage = async () => {
    setPageNum(pageNum + 1);
  }

  const backPage = async () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1)
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
              <div className='bubble'></div>
              <div className='bubble b-1'></div>
              <div className='juegos_list_btns'>
                <button onClick={backPage} className={pageNum === 1 ? 'hidden' : ''}>{pageNum > 1 ? pageNum - 1 : ''}</button>
                <h4>{pageNum}</h4>
                <button onClick={nextPage}>{pageNum + 1}</button>
              </div>
            </div>
          )
        )
      }
    </section>
  )
}