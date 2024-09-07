import React, { useState } from 'react';

function Counter() {
    const [arr, setArr] = useState([
        
    ])

function addPlus() {
    setArr(prevValue => [...prevValue, "+"])
}

function addMinus() {
    setArr(prevValue => [...prevValue, "-"])
}

   return (
    <>
    <div>
        <button onClick={addMinus}>-</button>
        <button onClick={addPlus}>+</button>
        {arr.toString()}
    </div>
    </>
   )
}

export default Counter;