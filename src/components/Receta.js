import React, { useContext, useState } from 'react'
import {ModalContext} from '../context/ModalContext'
import Modal from '@material-ui/core/modal'
import {makeStyles} from '@material-ui/core/styles'

function getModalStyle() {
  const top = 50
  const left = 50

  return{
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const Receta = ({receta}) => {

  const [modalStyle] = useState(getModalStyle)
  const [open, setopen] = useState(false)

  const classes = useStyles()

  const handleOpen = () => {
    setopen(true)
  }
  const handleClose = () => {
    setopen(false)
  }

  const {setidreceta, recetaModal, setreceta} = useContext(ModalContext)
  console.log(recetaModal)

  // muestra y formatea los ingredientes
  const mostrandoIngredientes = (recetaModal) =>{
    let ingredientes = []
    for (let i = 1; i < 16; i++) {
      if(recetaModal[`strIngredient${i}`]){
        ingredientes.push(
          <li>{recetaModal[`strIngredient${i}`]} {recetaModal[`strMeasure${i}`]}</li>
        )
      } 
    }
    console.log(ingredientes)
    return ingredientes
  }

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">
          {receta.strDrink}
        </h2>
        <img src={receta.strDrinkThumb} className="card-img-top" alt={`Imagen de ${receta.strDrink}`}/>
      </div>
      <div className="card-body">
        <button
          type="button"
          className="btn btn-block btn-primary"
          onClick={() => {
            setidreceta(receta.idDrink)
            handleOpen()
          }}
        >
          ver receta
        </button>
        <Modal
          open={open}
          onClose={() => {
            setidreceta(null)
            setreceta({})
            handleClose()
          }}
        >
          <div style={modalStyle} className={ `${classes.paper}`}>
            <h2>{recetaModal.strDrink} </h2>
            <h3 className="mt-4">instrucciones</h3>
            
            <p>
              {recetaModal.strInstructions}
            </p>
            <img src={recetaModal.strDrinkThumb} className="img-fluid my-4" />

            <h3>ingredientes y cantidades</h3>
            <ul>
              {mostrandoIngredientes(recetaModal)}
              
            </ul>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Receta
