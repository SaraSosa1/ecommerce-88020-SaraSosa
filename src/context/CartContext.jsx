import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
       localStorage.setItem("cart-ecommerce", JSON.stringify (cart));
    }, [cart])

    const addProduct = (newProduct) => {
       const indexProduct = cart.findIndex((productCart)=> productCart.id === newProduct.id); 

       if(indexProduct === -1){
        setCart([...cart, newProduct ]);
       }else{
        const newCart = [...cart];
        newCart[indexProduct].quantity = newCart[indexProduct].quantity + newProduct.quantity;
        setCart(newCart);
       }

    }

    const totalQuantity = () => {
       const quantity =  cart.reduce( (total, productCart) => total + productCart.quantity, 0);
       return quantity;
    }

    const totalPrice = () => {
        const total = cart.reduce((total, productCart )=> total + (productCart.price * productCart.quantity ), 0);
        return total;
    }

    const deleteProductById = (productId) => {
       const productsFiltered = cart.filter( (productCart) => productCart.id !== productId);
       setCart(productsFiltered);
    }

    const deleteCart = () => {
        setCart([])
    }

    console.log(cart);

    return(
        <CartContext.Provider value={{ cart, addProduct, totalQuantity, totalPrice, deleteProductById, deleteCart }}>
            {children}
        </CartContext.Provider>
    )
};

export { CartContext, CartProvider };