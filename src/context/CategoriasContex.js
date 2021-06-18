import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

// crear el contex
export const CategoriasContext = createContext()

// Provider es donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {
  // crear el state del context
  const [categorias, setcategorias] = useState([])

  // ejecutar llamado a api
  useEffect(() => {
    const ObtenerCategorias = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      const categorias = await axios.get(url)
      setcategorias(categorias.data.drinks)
    }
    ObtenerCategorias()
  }, [])

  return(
    <CategoriasContext.Provider
      value={{
        categorias
      }}     
    >
      {props.children}
    </CategoriasContext.Provider>
  )
}


export default CategoriasProvider