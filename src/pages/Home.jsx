import { NavLink, useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <section className='home'>
      <section className="landing">
        <div className="landing_welcome">
          <h1 className='degrade' data-text="acePlay">acePlay</h1>
          <h2>¡Compartimos tu pasión por los videojuegos!</h2>
          <div className='bubble'></div>
          <div className='bubble b-1'></div>
        </div>
          <div className='landing_datos'>
            <span className='landing_datos--item'>
              <i className="bi bi-envelope"></i>
              <p>Envío inmediato</p>
            </span>
            <span className='landing_datos--item'>
              <i className="bi bi-clock"></i>
              <p>Soporte las 24hs</p>
            </span>
            <span className='landing_datos--item'>
              <i className="bi bi-shield-check"></i>
              <p>Devoluciones gratuitas</p>
            </span>
          </div>
        <div className='landing_links'>
          <div onClick={() => navigate('/lanzamientos')} className="landing_links--item">
            <h2>Enterate de los próximos juegos en la sección de <NavLink to={'/lanzamientos'}>Lanzamientos.</NavLink></h2>
          </div>
          <div onClick={() => navigate('/categorias')} className="landing_links--item">
            <h2>Encontrá el juego que buscás en la sección de <NavLink to={'/categorias'}>Categorías.</NavLink></h2>
          </div>
          <div onClick={() => navigate('/juegos/page/1')} className="landing_links--item">
            <h2>Descubrí tu nuevo juego favorito en la sección de <NavLink to={'/juegos/page/1'} >Juegos.</NavLink></h2>
          </div>
        </div>
      </section>
    </section>
  );
}