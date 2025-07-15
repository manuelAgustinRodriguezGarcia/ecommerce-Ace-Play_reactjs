import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './css/App.css';
import Navbar from './components/NavBar/Navbar'
import { Home, Categorias, Carrito, Favoritos, Checkout, Juegos, Ofertas, Lanzamientos } from './pages';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartData from './contexts/CartData';
import { useState, useEffect } from 'react';
import AllGames from './contexts/AllGames';
import FavoritesData from './contexts/FavoritesData';
import { Footer } from './components/Footer';
import { JuegoData } from './components/juegos/JuegoData';

export const App = () => {
  const [contCart, setContCart] = useState(0);
  const [contFav, setContFav] = useState(0);
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

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
      <AllGames.Provider value={{ productos }}>
        <FavoritesData.Provider value={{ contFav, setContFav, favoritos, setFavoritos }}>
          <CartData.Provider value={{ contCart, setContCart, productosCarrito, setProductosCarrito }}>
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
                <Route path='/categorias/:category' element={<ItemListContainer />}></Route>
                <Route path='/game/:id' element={<ItemDetailContainer />}></Route>
                <Route path='/juegos/page/:page/juego/:id' element={<JuegoData />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
              </Routes>
              <Footer />
            </BrowserRouter>
          </CartData.Provider>
        </FavoritesData.Provider>
      </AllGames.Provider>
    </div>
  )
}