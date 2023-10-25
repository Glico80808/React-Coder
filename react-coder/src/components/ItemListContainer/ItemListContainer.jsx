import React from 'react';
import Count from '../Count/Count';

const ItemListContainer = ({mensaje}) => {

    return (
        <>
        <h1> {mensaje} </h1>
        <Count initial = {1} stock = {10}/>
        </>

    );
};

export default ItemListContainer;