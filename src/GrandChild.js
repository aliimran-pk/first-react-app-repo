import React, { useReducer}  from 'react'
import counterContext from './context/CounterContext';
import counterReducer from './reducer/CounterReducer';
import './App.css'

const GrandChild = () => {

    //let counterVal = useContext(counterContext);

    const [state, dispatch] = useReducer(counterReducer,10);
    
    return(
        <div>
             <h1>Grand Child Component</h1>
             <h3>Reducer Value= {state}</h3>
            
             <button  onClick={() => dispatch('INCREMENT')} >Increment</button>   
             <button  onClick={() => dispatch('DECREMENT')} >Decrement</button>   
        </div>
        
    )
}
export default GrandChild;