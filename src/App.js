import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import ListaRecetas from './components/ListaRecetas'

import CategoriasProvider from './context/CategoriasContex'
import RecetasProvider from './context/RecetasContex'
import ModalProvider from './context/ModalContext'

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header/>

          <div className="container mt-5 mx-auto">
            <div className="row">
              <Form/>
            </div>
            <ListaRecetas/>
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );

}

export default App;
