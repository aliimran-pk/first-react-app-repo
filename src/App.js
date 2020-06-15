import React, { useState } from 'react'
import counterContext from './context/CounterContext';
import Parent from './Parent'


export const App = () => {

  //let [count,setCountMethod]= useState(100);
  let countStateArr = useState(20);

  return (
    <counterContext.Provider value={countStateArr}>
    <div>
      <Parent />
    </div>

    </counterContext.Provider>
  )
}

export default App;