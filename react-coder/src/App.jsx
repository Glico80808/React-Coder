import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Count from './components/Count/Count'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {

  const enlaces = [
    "Inicio",
    "Productos",
    "Categorias",
    "Acerca de",
    "Conocenos"
  ]

  const greeting = "E-Commerce"

  return (
    <>
      <Navbar links = {enlaces} />
      <ItemListContainer mensaje = {greeting}/>
     {/* <Count initial = {1} stock = {10}/> */} 
    </>
  )
}

export default App

