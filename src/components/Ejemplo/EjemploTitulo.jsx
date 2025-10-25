import { useEffect } from "react"

const EjemploTitulo = () => {

  useEffect(()=> {

    const mostrarAnchoVentana = () => {
      console.log("Ancho: ", window.innerWidth);
    }
  
    window.addEventListener("resize", mostrarAnchoVentana)
   
    //esta funcion se ejecut al desmontar el componente
    return () => {
    window.removeEventListener("resize", mostrarAnchoVentana);
    }
    
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default EjemploTitulo
