import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./Counter";

function App() {

  const [count, setCount] = useState<number>(0);
  const lastNumber = 5;


  return (
<div>
    <Counter

        count={count}
        lastNumber={lastNumber}
        setCount={setCount}
    />
</div>

  )
}

export default App;
