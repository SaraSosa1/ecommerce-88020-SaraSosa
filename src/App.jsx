import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import pasteleria from "./assets/img/pasteleria.jpg"
import './App.css'

function App() {

  const saludo = "trabajamos por encargue, elegi lo que mas te guste!";


  return (
    <div className='app'>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi pasteleria"} />
      <h1>Pastelera:Martina Perez</h1>
      <h1>{saludo}</h1>
      <img src={pasteleria} alt="Pasteleria" className="imagen-container" />
    </div>
  )
}

export default App


// shift+alt+F para poner las lineas de cocidgo prolijas