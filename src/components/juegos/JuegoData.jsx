import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Juegos } from '../../pages/Juegos';

export const JuegoData = () => {
  const { id } = useParams();

  const [juego, setJuego] = useState(null);
  const [juegoImages, setJuegoImages] = useState('');
  const [juegoVideos, setJuegoVideos] = useState(null);
  const [showLoading, setShowLoading] = useState(true);
  
  const [banner, setBanner] = useState(0);

  const getJuego = async () => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games/${id}?key=957f6a2b15fa49f68a9bb400ac60e7f0`);
      const data = await response.json();
      setJuego(data);

      const responseImg = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=957f6a2b15fa49f68a9bb400ac60e7f0`)
      const dataImages = await responseImg.json();
      setJuegoImages(dataImages);
      console.log(juegoImages)

      const responseVideos = await fetch(`https://api.rawg.io/api/games/${id}/movies?key=957f6a2b15fa49f68a9bb400ac60e7f0`)
      const dataVideos = await responseVideos.json();
      setJuegoVideos(dataVideos);

    }
    catch (error) {
      console.error("Error fetching games:", error);
    }
    finally {
      setShowLoading(false);
    }
  }
  console.log('DATOS COMPLETOS: ');
  console.log(juego);
  console.log('VIDEOS DE JUEGO: ');
  console.log(juegoVideos);
  console.log('SCREENSHOTS DE JUEGO: ');
  console.log(juegoImages);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowLoading(false);
    getJuego();
  }, []);

  return (
    <section className='data'>
      {juego && juegoImages && juegoVideos ?
        <>
          <div className='data_background'>
            <img src={juego.background_image} alt="" />
          </div>
          <section className='data_juego'>
            <div className='data_juego_info'>
              <div className='data_juego_info_cont'>
                <h1>{juego.name}</h1>
                <div className='data_juego_info_cont_banner'>
                  <button className={banner === 0 && 'hide'} onClick={() => setBanner(banner - 1)}><i class="bi bi-caret-left"></i></button>
                  <button className={banner === 5 && 'hide'} onClick={() => setBanner(banner + 1)}><i class="bi bi-caret-right"></i></button>
                  <img src={juegoImages.results[banner].image} alt="No se encontro imagen" />
                </div>
                <div className='data_juego_info_cont_carousel'>
                  <div onClick={() => setBanner(0)} className='data_juego_info_cont_carousel--item'>
                    <img src={juegoImages.results[0].image} alt="No se encontro imagen" />
                  </div>
                  <div onClick={() => setBanner(1)} className='data_juego_info_cont_carousel--item'>
                    <img src={juegoImages.results[1].image} alt="No se encontro imagen" />
                  </div>
                  <div onClick={() => setBanner(2)} className='data_juego_info_cont_carousel--item'>
                    <img src={juegoImages.results[2].image} alt="No se encontro imagen" />
                  </div>
                  <div onClick={() => setBanner(3)} className='data_juego_info_cont_carousel--item'>
                    <img src={juegoImages.results[3].image} alt="No se encontro imagen" />
                  </div>
                  <div onClick={() => setBanner(4)} className='data_juego_info_cont_carousel--item'>
                    <img src={juegoImages.results[4].image} alt="No se encontro imagen" />
                  </div>
                  <div onClick={() => setBanner(5)} className='data_juego_info_cont_carousel--item'>
                    <img src={juegoImages.results[5].image} alt="No se encontro imagen" />
                  </div>
                </div>
                <div className='data_juego_info_cont_text'>
                  <p>{juego.description_raw}</p>
                </div>
              </div>
              <div className='data_juego_info_cta'>
                <img src={juego.background_image} alt="" />
                <h2>{juego.name}</h2>
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