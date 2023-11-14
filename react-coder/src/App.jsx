import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Count from './components/Count/Count'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ProductosListContainer from './components/ProductosListContainer/ProductosListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Count2 from './components/Count/Count2'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Error from './components/Error/Error'
import Navbar2 from './components/Navbar2/Navbar2'
import Contacto from './components/Contacto/Contacto'
import Ubicacion from './components/Ubicacion/Ubicacion'
import Footer from './components/Footer/Footer'
function App() {


  

  return (
    <>
 
    <Navbar/>
    <BrowserRouter>
    <Routes>

      <Route path = '/React-Coder/' element = {<ItemListContainer/>}/>
      <Route path = '/React-Coder/:categoryId' element = {<ItemListContainer/>}/>
      <Route path = '/React-Coder/item/:idProduct' element = {<ItemDetailContainer/>}/>
      <Route path = '/React-Coder/Contacto' element = {<Contacto/>}/>
      <Route path = '/React-Coder/Ubicacion' element = {<Ubicacion/>}/>
      <Route path = '*' element = {<Error/>}/>
      
    </Routes>
    </BrowserRouter>
    <Footer/>



    {/*<Navbar/>
    <ItemListContainer/>
  <ItemDetailContainer productId={4}/>*/}
    </>
  )
}

export default App

