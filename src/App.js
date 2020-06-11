import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloComponent from './HelloComponent';
import './HelloComponent.css';
import Avatar from './Avatar';
import {Message} from './Message.js'
import './App.css';

export default function App() {

  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false)

  return (
    <div className={`box ${isMorning ? 'dayLight' : 'nght'}`}>

      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>

      <Message counter={count} />
      <br />

      <button onClick={() => setCount(count + 1)}>
        Update Counter
      </button>

      <button onClick={() => setMorning(!isMorning)}> 
        Show {isMorning ? 'Night': 'Morning'}
      </button>

    </div>
  );
}



{/* 
function App() 
{
  return ( 
<div>
<Avatar userName="jacques"/>
<Avatar userName="julie"/>
<Avatar userName="jake"/>
<Avatar userName="john"/>
</div>
)
}
*/}


{/*
return ( 
<div>
  <HelloComponent componentId="001" userName="Ali Imran" rollNo="PIAIC50192"/>
  <hr />
  <HelloComponent componentId="002" userName="Ali Imran" rollNo="PIAIC50192"/>
  <hr />
  <HelloComponent componentId="003" userName="Ali Imran" rollNo="PIAIC50192"/>
</div>
);
*/
}

{/*
  return (
    <div className="App">        
        <ul>
         <li>ALI IMRAN</li>
         <li>PIAIC50192</li>
         <li>BootCamp Class 2  Assignment-2 </li>         
       </ul>
    </div>
  );
 */}

//export default App;
