import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'

// crear el context
export const ModalContext = createContext()

const ModalProvider = (props) => {

  // state del provider
  const [idreceta, setidreceta] = useState(null)
  const [recetaModal, setreceta] = useState({})

  useEffect(() => {
    const obtenerReceta = async () => {
      if(!idreceta) return
      
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
      const result = await axios.get(url)
      setreceta(result.data.drinks[0])
      
    }
    obtenerReceta()
    
  }, [idreceta])

  return (
    <ModalContext.Provider
      value = {{
        recetaModal,
        setidreceta,
        setreceta
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
