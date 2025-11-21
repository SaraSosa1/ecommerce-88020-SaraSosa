import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore";
import data from "../data/products.json" with { type: "json" };



const seedProducts = async() => {

    try{
        const productsRef = collection(db, "products"); 

        data.map( async( {id, ...dataProduct } ) => {
            await addDoc(productsRef, dataProduct);
        } );
        console.log("Productos subidos corrrectamente!");
    } catch (error) {
        console.log(error);
    }

}

seedProducts();