import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';
import MLListConteiner from './components/MLListConteiner/MLListConteiner'
import { useState } from 'react';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';


const App = () => {
  const [show, setShow] = useState (true)
  
  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:id'element={<ItemDetail/>}/>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;