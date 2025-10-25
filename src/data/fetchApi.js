const getProducts = () => {
    return fetch("http://localhost:3000/api/products")
    .then((respuesta)=> {
      return respuesta.json();   
     })
     .catch((error)=>{
        console.log(error);
     })
}

const getProductById = (productId) =>  {
   return fetch("http://localhost:3000/api/products/" + productId) // Falta la "/"
   .then((respuesta)=> respuesta.json())
   .catch((error)=> console.log(error))
}

export { getProducts, getProductById }