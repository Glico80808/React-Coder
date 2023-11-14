import React,{useState} from 'react';

const useCounter = (initial) => {

    const[count, setCount] = useState (initial)

    const incrementar = () =>{
            setCount(count + 1)
    }

    const decrementar = () => {
            setCount(count - 1)
        

    }
    return {count, incrementar, decrementar};
};

export default useCounter;