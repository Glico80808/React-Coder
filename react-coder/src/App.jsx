import { useState,useEffect } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Error from './components/Error/Error'
import Navbar2 from './components/Navbar2/Navbar2'
import Contacto from './components/Contacto/Contacto'
import Ubicacion from './components/Ubicacion/Ubicacion'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import { CartProvider } from './Context/CartContext'
import {query,where,getFirestore,collection,getDocs} from "firebase/firestore"
import Checkout from './components/Checkout/Checkout'


function App() {

  const[product,setProduct] = useState()

  useEffect(()=>{
//constante es database
    const db = getFirestore()

    const collectionRef = collection(db,"productos");

    getDocs(collectionRef).then((snapshot)=>{
      setProduct(snapshot.docs.map((doc)=>(
        {id:doc.id,...doc.data()}
      )))
    })

  },[])


  return (
    <>
 
    
    <BrowserRouter>
    <CartProvider>
    <Navbar2/>
    <Routes>

      <Route path = '/React-Coder/' element = {<ItemListContainer/>}/>
      <Route path = '/React-Coder/:categoryId' element = {<ItemListContainer/>}/>
      <Route path = '/React-Coder/item/:idProduct' element = {<ItemDetailContainer/>}/>
      <Route path = '/React-Coder/Contacto' element = {<Contacto/>}/>
      <Route path = '/React-Coder/Cart' element = {<Cart/>}/>
      <Route path = '/React-Coder/Checkout' element = {<Checkout/>}/>
      <Route path = '*' element = {<Error/>}/>
      
    </Routes>
    </CartProvider>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App

