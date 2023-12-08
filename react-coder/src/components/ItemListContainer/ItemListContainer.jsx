import React,{ useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {collection,getDocs,getFirestore,query,where} from "firebase/firestore"

const ItemListContainer = () =>{

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true)
const {categoryId} = useParams()

useEffect(() => {
// inicializar el estado de carga de los productos
        setLoading(true);
//crear la instancia de la db
const db = getFirestore()

// generar el filtrado de los productos
const misProductos = categoryId
? query(collection(db,"productos"),where("categoria","==",categoryId))
: collection(db,"productos")

//generar documentos solicitados
getDocs(misProductos)
.then((res)=>{
    const nuevosProductos = res.docs.map((doc)=>{
        const data = doc.data()
        return {id:doc.id,...data}
    })
    setProducts(nuevosProductos)
})
.catch((error)=>console.log(error))
.finally(()=>{
    //se cancela el loading y se muestran los productos
    setLoading(false)
})
        
},[categoryId])

    return(
    <>
       {loading ? (
        <h1 className="pedidodemana">Cargando...</h1>
       ) : (
        <ItemList products={products}/>
       )}
    </>
);

};

export default ItemListContainer;