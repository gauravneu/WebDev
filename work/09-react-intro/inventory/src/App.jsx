import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Reorder from './Reorder';

function App() {

  const[count , setCount] = useState(0);
  function onReorder(){
    setCount(5);
  }

  return (
    <div className="app">
      Current Count : {count}
      <button className='button' onClick = {() => setCount(count+1)}>+</button>
      <button className='button' disabled={!count} onClick = {() => setCount(count-1)}>-</button>
        {
      !count
         ? <Reorder onReorder={onReorder}/> : ''
}
  
    </div>
  );
}

export default App;
