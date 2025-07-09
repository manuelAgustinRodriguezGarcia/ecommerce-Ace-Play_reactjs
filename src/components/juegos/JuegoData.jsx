import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Juegos } from '../../pages/Juegos';

export const JuegoData = () => {
  const { id } = useParams();

  const [juego, setJuego] = useState(null);
  const [juegoImages, setJuegoImages] = useState(null);
  const [juegoVideos, setJuegoVideos] = useState(null);
  const [showLoading, setShowLoading] = useState(true);

  const getJuego = async () => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games/${id}?key=957f6a2b15fa49f68a9bb400ac60e7f0`);
      const data = await response.json();
      setJuego(data);

      const responseImg = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=957f6a2b15fa49f68a9bb400ac60e7f0`)
      const dataImages = await responseImg.json();
      setJuegoImages(dataImages);

      const responseVideos = await fetch(`https://api.rawg.io/api/games/${id}/movies?key=957f6a2b15fa49f68a9bb400ac60e7f0`)
      const dataVideos = await responseVideos.json();
      setJuegoVideos(dataVideos);

      const tags = await fetch(`https://api.rawg.io/api/developers?key=957f6a2b15fa49f68a9bb400ac60e7f0`)
      const dataTags = await tags.json()
      
      console.log('JUEGO CATOS COMPLETOS: ');
      console.log(data);
      console.log('VIDEOS DE JUEGO: ');
      console.log(dataVideos);
      console.log('SCREENSHOTS DE JUEGO: ');
      console.log(dataImages);
      console.log(dataTags)
    }
    catch (error) {
      console.error("Error fetching games:", error);
    }
    finally {
      setShowLoading(false);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowLoading(false);
    getJuego();
  }, []);

  return (
    <section className='data'>
      {juego ?
        <>
          <div className='data_background'>
            <img src={juego.background_image} alt="" />
          </div>
          <section className='data_juego'>
            <div className='data_juego_info'>
              <div className='data_juego_info_cont'>
                <h1>{juego.name}</h1>
                <img src={juego.background_image} alt="" />
                <img src={juego.background_image} alt="" />
              </div>
              <div className='data_juego_info_cta'>
                <ul className='data_juego_info_cta_list'>
                  <li>Desarrollador <h5>{juego.developers[0].name}</h5></li>
                  <li>Editor <h5>{juego.publishers[0].name}</h5></li>
                  <li>Lanzamiento <h5>{juego.released}</h5></li>
                  <li>Plataformas <h5>{juego.parent_platforms[0].platform.name}</h5></li>
                </ul>
                <div className='data_juego_info_cta_btns'>
                  <button>Comprar ahora</button>
                  <button>Agregar a Favoritos <i className="bi bi-heart"></i></button>
                  <button>Agregar a Carrito <i className="bi bi-cart"></i></button>
                </div>
              </div>
            </div>
          </section>
        </>
        :
        <div className='juegos_loading'>
          <h2 className='degrade' data-text='Cargando...'>Cargando...</h2>
        </div>
      }
    </section>
  )
}