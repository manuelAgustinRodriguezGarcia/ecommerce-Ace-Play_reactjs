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
  const [expanded, setExpanded] = useState(false)
  const [price, setPrice] = useState(0)


  const getJuego = async () => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games/${id}?key=957f6a2b15fa49f68a9bb400ac60e7f0`);
      const data = await response.json();
      setJuego(data);
      
      const responseImg = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=957f6a2b15fa49f68a9bb400ac60e7f0`)
      const dataImages = await responseImg.json();
      setJuegoImages(dataImages);
      console.log(juegoImages);
      
      // const responseVideos = await fetch(`https://api.rawg.io/api/games/${id}/movies?key=957f6a2b15fa49f68a9bb400ac60e7f0`)
      // const dataVideos = await responseVideos.json();
      // setJuegoVideos(dataVideos);
      
      const released = parseInt((await data.released).substring(0, 4));
      const currentYear = new Date().getFullYear();
      const antiguedad = currentYear - released;
      const price = Math.max(5, 69 - antiguedad * 3);
      setPrice(price)
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
  console.log('IMAGENES ARRAY: ');
  console.log(juegoImages);
  
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowLoading(false);
    getJuego();
  }, []);
  

  return (
    <section className='data'>
      {juego && juegoImages ?
        <>
          <div className='data_background'>
            <img src={juego.background_image} alt="" />
          </div>
          <section className='data_juego'>
            <div className='data_juego_info'>
              <div className='data_juego_info_cont'>
                <div className='data_juego_info_cont_title'>
                  <h1>{juego.name}</h1>
                  <div className='data_juego_info_cont_title_tags'>
                    {juego.tags.slice(0,4).map((item, index) => (
                      <h5 key={index}>{item.name.toUpperCase()}</h5>
                    ))}
                  </div>
                </div>
                <div className='data_juego_info_cont_banner'>
                  <button
                    className={banner === 0 ? 'hide' : ''}
                    onClick={() => setBanner(banner - 1)}
                    disabled={banner === 0}>
                    <i className="bi bi-caret-left"></i>
                  </button>
                  <button
                    className={banner >= juegoImages.results.length - 1 ? 'hide' : ''}
                    onClick={() => setBanner(banner + 1)}
                    disabled={banner === juegoImages.results.length - 1}>
                    <i className="bi bi-caret-right"></i>
                  </button>
                  <img src={juegoImages.results[banner]?.image} alt="No se encontro imagen" />

                </div>
                <div className='data_juego_info_cont_carousel'>
                  {juegoImages.results.map((item, index) => (
                    item.image && (
                      <div key={index} onClick={() => setBanner(index)} className='data_juego_info_cont_carousel--item'>
                        <img src={item.image} alt="No se encontro imagen" />
                      </div>
                    )))}
                </div>
                <div className='data_juego_info_cont_text'>
                  <h3>Descripción</h3>
                    {juego.description_raw.length > 350? (
                      <>
                        <p className={expanded ? 'largo' : 'corto'}>{juego.description_raw}</p>
                        <button className={expanded === true ? 'toggle_hidden' : 'toggle_shown' } onClick={() => setExpanded(true)}><i className="bi bi-caret-down"></i>Ver más</button>
                      </>
                    ): <p className={expanded ? 'largo' : 'corto'}>{juego.description_raw}</p>
                    }
                </div>
                <div className='data_juego_info_cont_rating'>
                  <h3>Valoraciones</h3>
                </div>
              </div>
              <div className='data_juego_info_cta'>
                <img src={juego.background_image} alt="" />
                <h2 className='data_juego_info_cta_title'>{juego.name}</h2>
                <ul className='data_juego_info_cta_list'>
                  <li>Género <h4>{juego.genres[0].name}</h4></li>
                  <li>Desarrollador <h4>{juego.developers[0].name}</h4></li>
                  <li>Editor <h4>{juego.publishers[0].name}</h4></li>
                  <li>Lanzamiento <h4>{juego.released}</h4></li>
                  <li>Plataformas
                    <div className='data_juego_info_cta_list_platform' title={juego.parent_platforms.map((i) =>(" " + i.platform.name) )}>
                      {juego.parent_platforms.slice(0,3).map((item, index) => (
                        <h4 key={index}>{item.platform.name}{index < juego.parent_platforms.length - 1 && ' - '}</h4>
                      ))}
                      {juego.parent_platforms.length > 3 && '...'}
                    </div>
                  </li>
                </ul>
                <h2 className='data_juego_info_cta_price'>${price}.99</h2>
                <div className='data_juego_info_cta_btns'>
                  <div className='data_juego_info_cta_btns_favCart'>
                    <button>Agregar a Favoritos <i className="bi bi-heart"></i></button>
                    <button>Agregar a Carrito <i className="bi bi-cart"></i></button>
                  </div>
                  <button className='data_juego_info_cta_btns_buy'><span>Comprar ahora</span></button>
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