import React, { useContext } from 'react'
import counterContext from './context/CounterContext';
import GrandChild from './GrandChild';

const Child = () => {

    let [count,setCount] = useContext(counterContext);
    //console.log(counterVal);
    return(
        <div>
            <h1>Child Component</h1>
            <h2>Counter Value=  {count}</h2>            
            <button onClick={()=>{setCount(++count)} }>Increment</button>
            <button onClick={()=>{setCount(--count)} }>Decrement</button>
            <hr />
            <GrandChild />
        </div>
    )
}
export default Child;
/*
  {  () => functionName(funcParam) }
*/