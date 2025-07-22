import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import { Navbar } from './components/NavBar/Navbar'
import { Home, Categorias, Carrito, Favoritos, Checkout, Juegos, Lanzamientos, GenreResults } from './pages';
import { Footer } from './components/Footer';
import { JuegoData } from './components/juegos/JuegoData';
import { FavoritesProvider } from './contexts/FavoritesProvider';
import { CartProvider } from './contexts/CartProvider';

export const App = () => {

  return (
    <div className="App">
      <CartProvider>
        <FavoritesProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/categorias' element={<Categorias />}></Route>
              <Route path='/favoritos' element={<Favoritos />}></Route>
              <Route path='/carrito' element={<Carrito />}></Route>
              <Route path='/juegos/page/:page' element={<Juegos />} />
              <Route path='/lanzamientos' element={<Lanzamientos />}></Route>
              <Route path='/categorias/page/:page/:query' element={<GenreResults />}></Route>
              <Route path='/juegos/page/:page/juego/:id' element={<JuegoData />}></Route>
              <Route path='/checkout' element={<Checkout />}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </FavoritesProvider>
      </CartProvider>
    </div>
  )
}