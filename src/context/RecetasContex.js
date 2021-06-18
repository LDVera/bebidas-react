import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const RecetasContext = createContext()

const RecetasProvider = (props) => {

  const [recetas, setrecetas] = useState([])
  const [busqueda, setbusquedaReceta] = useState({
    nombre: '',
    categoria: ''
  })

  const [consultar, setconsultar] = useState(false)
  const {nombre, categoria} = busqueda

  useEffect(() => {
    // if(Object.keys(nombre).length === 0 || Object.keys(categoria).length === 0) return

    if (consultar){
      const obtenerRecetas = async () =>{
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`

        const resultado =  await axios.get(url)

        setrecetas(resultado.data.drinks)
        console.log(resultado.data.drinks)
      }
      obtenerRecetas()
    }
    
  }, [busqueda])

  
  return(
    <RecetasContext.Provider
      value={{
        recetas,
        setbusquedaReceta,
        setconsultar
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  )

}

export default RecetasProvider