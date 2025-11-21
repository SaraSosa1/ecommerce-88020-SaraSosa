import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import './App.css';


function App() {


  return (
    <div className='app'>
      <BrowserRouter>
      <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer greeting={"Bienvenidos a mi pasteleria"} /> } />
        <Route path="/category/:category" element={<ItemListContainer greeting={"Bienvenidos a mi pasteleria"} />} />
        <Route path="/detail/:id" element={ <ItemDetailContainer /> } />
        <Route path="/cart" element={<Cart/>} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={ <div>Error 404</div>} />
        
      </Routes>
      </CartProvider>
    
      </BrowserRouter>
    </div>
    )
}

export default App


// shift+alt+F para poner las lineas de cocidgo prolijas