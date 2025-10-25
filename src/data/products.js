import products from "./products.json"


const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(()=> {
         resolve(products)
        },3000)
      

    } )
}

export default getProducts