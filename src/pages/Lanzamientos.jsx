import React, { useEffect, useState } from 'react'

export const Lanzamientos = () => {
  const [listaJuegos, SetListaJuegos] = useState([]);
  const [showLoading, setShowLoading] = useState(true);


  const today = new Date().toISOString().split('T')[0];
  const getComingGames = async () => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=957f6a2b15fa49f68a9bb400ac60e7f0&dates=${today},2030-12-31&page_size=30`);
      const data = await response.json();
      SetListaJuegos(data.results);
      console.log(data.results);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
    finally {
      setShowLoading(false);
      window.scrollTo(0, 0);
    }
  }
  useEffect(() => {
    getComingGames();
  }, [])
  return (
    <section className='lanzamientos'>
      {showLoading || listaJuegos.length === 0 ? (
        <div className='juegos_loading'>
          <h2 className='degrade' data-text='Cargando...'>Cargando...</h2>
        </div>
      ) :
        (
          <>
          <h1>Los lanzamientos más esperados</h1>
            <div className='lanzamientos_list'>
              {listaJuegos.map((x) => (
                <div key={x.id} className='lanzamientos_list_item'>
                  <img src={x.background_image} alt="" />
                  <div className='lanzamientos_list_item_info'>
                    <h4>{x.name}</h4>
                    <ul>
                    <h5 className='lanzamientos_list_item_info_date'>{x.released}</h5>
                      <h5>Próximamente disponible en:</h5>
                      {x.platforms?.map((x) => <li key={x.platform.id}>{x.platform.name}</li>)}
                    </ul>
                  </div>
                  <h5 className='lanzamientos_list_item_date'>{x.released}</h5>
                </div>
              ))}
            </div>
          </>
        )
      }
    </section>
  )
}