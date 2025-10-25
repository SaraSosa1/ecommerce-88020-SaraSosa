import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import './App.css'


function App() {


  return (
    <div className='app'>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi pasteleria"} />
    </div>
    )
}

export default App


// shift+alt+F para poner las lineas de cocidgo prolijas