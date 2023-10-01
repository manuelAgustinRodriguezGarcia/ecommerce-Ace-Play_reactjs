import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Navbar from './components/NavBar/Navbar'
import Home from './pages/Home';
import Tendencias from './pages/Tendencias';
import NuevosLanzamientos from './pages/NuevosLanzamientos';
import Categorias from './pages/Categorias';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/categorias' element={<Categorias />}></Route>
          <Route path='/tendencias' element={<Tendencias />}></Route>
          <Route path='/nuevoslanzamientos' element={<NuevosLanzamientos />}></Route>
          <Route path='/categorias' element={<Categorias />}></Route>
          <Route path='/categorias/:categoria' element={<ItemListContainer />}></Route>
          <Route path='/game/:id' element={<ItemDetailContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;