import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Navbar from './components/NavBar/Navbar'
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Categorias from './pages/Categorias';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartData from './contexts/CartData';
import { useState, useEffect } from 'react';
import Carrito from './pages/Carrito';
import Checkout from './pages/Checkout';
import AllGames from './contexts/AllGames';
import { db } from '.';
import { collection, getDocs } from 'firebase/firestore';
import FavoritesData from './contexts/FavoritesData';

function App() {
  const [ contCart, setContCart ] = useState(0)
  const [ productosCarrito, setProductosCarrito ] = useState([]);
  const [ productos, setProductos ] = useState([])
  const [ favoritos, setFavoritos ] = useState([]);

  useEffect (() => {
    const getProducts = async()=>{
      try {
        const querySnapshot = await getDocs(collection(db, 'products'))
        const productosDB = []
        querySnapshot.forEach((producto)=> {
          productosDB.push({...producto.data(), id: producto.id})
        })
        setProductos(productosDB)
      }catch (error) {
        console.log(error)
      }
    }
    getProducts()
  },[])

  return (
    <div className="App">
      <AllGames.Provider value={{productos}}>
        <FavoritesData.Provider value={{favoritos, setFavoritos}}>
          <CartData.Provider value={{ contCart, setContCart, productosCarrito, setProductosCarrito }}>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/categorias' element={<Categorias />}></Route>
                <Route path='/favoritos' element={<Favoritos />}></Route>
                <Route path='/carrito' element={<Carrito />}></Route>
                <Route path='/categorias/:categoria' element={<ItemListContainer />}></Route>
                <Route path='/game/:id' element={<ItemDetailContainer />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
              </Routes>
            </BrowserRouter>
          </CartData.Provider>
        </FavoritesData.Provider>
      </AllGames.Provider>
    </div>
  )
}
export default App;