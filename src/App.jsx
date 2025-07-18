import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import { Navbar } from './components/NavBar/Navbar'
import { Home, Categorias, Carrito, Favoritos, Checkout, Juegos, Ofertas, Lanzamientos } from './pages';
import ItemListContainer from './components/ItemListContainer'; /*esto se va */
import ItemDetailContainer from './components/ItemDetailContainer'; /*esto se va */
import { useState, useEffect } from 'react';
import AllGames from './contexts/AllGames'; /*esto se va */
import { Footer } from './components/Footer';
import { JuegoData } from './components/juegos/JuegoData';
import { FavoritesProvider } from './contexts/FavoritesProvider';
import { CartProvider } from './contexts/CartProvider';

export const App = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('/data/games.json')
        const allGames = await response.json()
        setProductos(allGames)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts();
  }, [])



  return (
    <div className="App">
      <AllGames.Provider value={{ productos }}>{/*esto se va */}
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
                <Route path='/ofertas' element={<Ofertas />}></Route>
                <Route path='/lanzamientos' element={<Lanzamientos />}></Route>
                <Route path='/juegos/page/:page/juego/:id' element={<JuegoData />}></Route>
                <Route path='/categorias/:category' element={<ItemListContainer />}></Route>
                <Route path='/game/:id' element={<ItemDetailContainer />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
              </Routes>
              <Footer />
            </BrowserRouter>
          </FavoritesProvider>
        </CartProvider>
      </AllGames.Provider>
    </div>
  )
}