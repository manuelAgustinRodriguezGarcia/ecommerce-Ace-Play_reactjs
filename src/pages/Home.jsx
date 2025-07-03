import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="landing">
        <div className="landing_texto">
          <h1>acePlay</h1>
          <p>¡Los mejores juegos a los mejores precios!</p>
          <div className='bubble'></div>
          <div className='bubble b-1'></div>
        </div>
        <section className="landing_links">
          <h2>Encontrá el juego que estás buscando en la sección de <NavLink to={'/categorias'}>Categorías.</NavLink></h2>
        </section>
        <section className="landing_links">
          <h2>Conocé los mejores precios en la sección de <NavLink to={'/ofertas'}>Ofertas.</NavLink></h2>
        </section>
        <section className="landing_links">
          <h2>Descubrí juegos nuevos en la sección de <NavLink to={'/jeugos'}>Juegos.</NavLink></h2>
        </section>
      </section>
    </>
  );
}

export default Home;