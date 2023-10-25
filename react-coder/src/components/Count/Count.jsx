import {useState} from 'react';

const componentName = ({initial,stock}) => {

    let [count, setCount] = useState (initial)
    const aumentar = () => {
        if (count < stock){
            setCount(count ++)
        }
    }
    const disminuir = () => {
        if (count >1){
            setCount(count --)
        }
    } 

    console.log (initial)
    console.log (stock)
    return (
        <>
            <p> Contador: {count} </p>
            <button onClick={()=> {aumentar ()}}>Aumentar</button>
            <button onClick={()=> {disminuir ()}}>Disminuir</button>
        </>
    );
};

export default componentName;