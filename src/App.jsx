import './css/App.css';
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
function App() {
  return(
    <div className="App">
      <Navbar/>
      <ItemListContainer
      greeting = "ENCONTRÁ EL JUEGO QUE BUSCAS, SOMOS ACE PLAY. TU TIENDA DE CONFIANZA!"
      />
    </div>
  )
}
export default App;