import React,{ useState, useEffect } from 'react';
import Count from '../Count/Count';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () =>{
const [products, setProducts] = useState([]);
const {categoryId} = useParams()

useEffect(() => {

    const fetchData = () => {
        return fetch("/products.js")
        .then((response) => response.json())
        .then (( data) => {
            if(categoryId){
                const filterProducts = data.filter(p=>p.categoria == categoryId)
                setProducts(filterProducts)

            }else{
            console.log(data)
            setProducts(data)}
        })
        .catch((error) =>console.log(error))
    }

     fetchData()
},[])

    return(
    <>
        {products.length == 0 
        ?
        <h1>CARGANDO...</h1>
        :
        <ItemList products = {products}/>}

    </>
);

}

export default ItemListContainer;