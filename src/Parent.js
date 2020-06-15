
import React,{ useContext } from 'react';
import Child from './Child';
import counterContext from './context/CounterContext';


const Parent = (props) => {
    let [count,setCount] = useContext(counterContext);
    return (
        <div>
            <h1>Parent Component</h1>
            <h2>Counter Value=  {count}</h2>            
            <hr />
            <Child/>            
        </div>
    )
}

export default Parent;