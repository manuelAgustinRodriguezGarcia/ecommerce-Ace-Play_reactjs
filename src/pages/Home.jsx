import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <section className="landing">
        <div className="landing_welcome">
          <h1 className='degrade' data-text="acePlay">acePlay</h1>
          <h2>¡Compartimos tu pasión por los videojuegos!</h2>
          <div className='bubble'></div>
          <div className='bubble b-1'></div>
        </div>
          <div className='landing_datos'>
            <span className={'landing_datos--item'}>
              <i className="bi bi-envelope"></i>
              <p>Envío inmediato por e-mail</p>
            </span>
            <hr />
            <span className={'landing_datos--item'}>
              <i className="bi bi-clock"></i>
              <p>Soporte personalizado disponible las 24hs</p>
            </span>
            <hr />
            <span className={'landing_datos--item'}>
              <i className="bi bi-shield-check"></i>
              <p>Devoluciones gratuitas e inmediatas</p>
            </span>
          </div>
        <div className='landing_links'>
          <div className="landing_links--item">
            <h2>Enterate de los próximos juegos en la sección de <NavLink to={'/lanzamientos'}>Lanzamientos.</NavLink></h2>
          </div>
          <div className="landing_links--item">
            <h2>Conocé los mejores precios en la sección de <NavLink to={'/ofertas'}>Ofertas.</NavLink></h2>
          </div>
          <div className="landing_links--item">
            <h2>Descubrí tu nuevo juego favorito en la sección de <NavLink to={'/juegos'} >Juegos.</NavLink></h2>
          </div>
        </div>
      </section>
    </>
  );
}