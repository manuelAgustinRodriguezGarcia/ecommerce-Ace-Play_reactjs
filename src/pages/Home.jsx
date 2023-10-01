import banner from '../images/inicio.png'
import categoriasImg from '../images/categoriasInicio.png'
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <section className="inicio">
      <img src={banner} alt="" />
      <h1>BIENVENIDO A ACE PLAY!</h1>
      <p>¡Somos tu tienda en línea de confianza para adquirir los mejores videojuegos! Nos enorgullece ofrecer una amplia selección de juegos de alta calidad para todas las plataformas y gustos. Desde títulos clásicos hasta las últimas novedades, encontrarás todo lo que necesitas para alimentar tu pasión por los videojuegos. En Ace Play, tu próxima aventura virtual está a solo unos clics de distancia. ¡Comienza a explorar nuestro mundo de juegos hoy mismo!</p>
      <div className="inicio-categorias">
        <NavLink to={'/categorias'}><img src={categoriasImg} alt="" /></NavLink>
        <h2>Encontrá el juego que estás buscando y descubrí otros nuevos en nuestra sección de <NavLink to={'/categorias'}>Categorías.</NavLink></h2>
      </div>
    </section>
  );
}

export default Home;