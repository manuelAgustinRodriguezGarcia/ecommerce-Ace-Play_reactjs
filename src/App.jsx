import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Navbar from './components/NavBar/Navbar'
import Home from './pages/Home';
import Tendencias from './pages/Tendencias';
import NuevosLanzamientos from './pages/NuevosLanzamientos';
import Categorias from './pages/Categorias';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartData from './contexts/CartData';
import { useState } from 'react';
import Carrito from './pages/Carrito';

function App() {
  const [ contCart, setContCart ] = useState(0)
  const [ productosCarrito, setProductosCarrito ] = useState([]);
  return (
    <div className="App">
      <CartData.Provider value={{ contCart, setContCart, productosCarrito, setProductosCarrito }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/categorias' element={<Categorias />}></Route>
            <Route path='/tendencias' element={<Tendencias />}></Route>
            <Route path='/nuevoslanzamientos' element={<NuevosLanzamientos />}></Route>
            <Route path='/carrito' element={<Carrito />}></Route>
            <Route path='/categorias' element={<Categorias />}></Route>
            <Route path='/categorias/:categoria' element={<ItemListContainer />}></Route>
            <Route path='/game/:id' element={<ItemDetailContainer />}></Route>
          </Routes>
        </BrowserRouter>
      </CartData.Provider>
    </div>
  )
}
export default App;