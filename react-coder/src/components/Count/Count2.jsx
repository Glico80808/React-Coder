import {useState} from 'react';
import useCounter from '../useCounter/useCounter';

const Count2 = () => {

    const {count, incrementar, decrementar} = useCounter(0)

    
    return (
        <>
           <p>count: {count}</p>
           <button onClick={incrementar}>Aumentar</button>
           <button onClick={decrementar}>Disminuir</button>
        </>
    );
};

export default Count2;