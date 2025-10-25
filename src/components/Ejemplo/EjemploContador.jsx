
import { useState, useEffect } from "react";
import EjemploTitulo from "./EjemploTitulo";

const EjemploContador = () => {

    const [ contador, setContador] = useState(1);
    const [toggle, setToggle] = useState(true);
    
    const aumentar = () => {
    if(contador < 10){
    setContador ( contador + 1);
    }
  }
 
  const alternarToggle = () => {
    setToggle(!toggle);
  }
 
   useEffect(()=> {
     console.log("1er useEffect");
   }, [])

   useEffect(()=> {
     console.log("2do useEffect");
   }, [contador])

   useEffect(()=> {
    console.log("3er useEffect")
   } )


  return (
    <div>
        <p>Contador: {contador} </p>
        <button onClick={aumentar}>+</button>

        <p>boolean: {toggle.toString()}</p>
        <button onClick={alternarToggle}>Alternar valor</button>
      
     {
      toggle && <EjemploTitulo/>
     }
     
    </div>
  )
}

export default EjemploContador
