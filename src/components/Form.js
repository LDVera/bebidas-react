import React, {useContext, useState} from 'react'
import {CategoriasContext} from '../context/CategoriasContex'
import {RecetasContext} from '../context/RecetasContex'

const Form = () => {

  // context space
  const { categorias } = useContext(CategoriasContext)
  const { setbusquedaReceta, setconsultar } = useContext(RecetasContext)

  // states space
  const [busqueda, setbusquedaForm] = useState({
    nombre: '',
    categoria: ''
  })

  // funcion para leer el contenido
  const obtenerDatosReceta = e => {
    setbusquedaForm({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }

  return (
    
    <form
      className="col-12"
      onSubmit={e => {
        e.preventDefault()
        setbusquedaReceta(busqueda)
        setconsultar(true)
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por categoria o ingrediente</legend>
        
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input 
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Buscar por ingrediente"
            onChange={obtenerDatosReceta}
           />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="categoria"
            onChange={obtenerDatosReceta}
          >
            <option value="">-- Selecciona categoria --</option>
            {categorias.map(categoria => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
              
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <input 
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar receta"
          />
        </div>
      </div>
    </form>

    
    
  )
}

export default Form
