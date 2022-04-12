import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';
import MLListConteiner from './components/MLListConteiner/MLListConteiner'
import { useState } from 'react';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'

const App = () => {
  const [show, setShow] = useState (true)
  
  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting={"Catalogo en construccion!"} />
      </header> */}
      <ItemDetailConteiner/>
    </div>
  );
}

export default App;