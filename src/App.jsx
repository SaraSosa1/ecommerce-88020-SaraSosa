import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'


function App() {


  return (
    <div className='app'>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer greeting={"Bienvenidos a mi pasteleria"} /> } />
        <Route path="/category/:category" element={<ItemListContainer greeting={"Bienvenidos a mi pasteleria"} />} />
        <Route path="/detail/:id" element={ <ItemDetailContainer /> } />
        <Route path="*" element={ <div>Error 404</div>} />
        
      </Routes>
    
      </BrowserRouter>
    </div>
    )
}

export default App


// shift+alt+F para poner las lineas de cocidgo prolijas