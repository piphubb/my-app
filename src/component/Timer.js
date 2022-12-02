import React, {useState, useEffect} from 'react';

const Timer = () => {

    const [count, setCount] = useState(0)
    
    useEffect (() => {
        setTimeout(() =>{
            setCount((count) => count + 1);
        }, 1000)
    })

  return (
    <>
        <h2>Number Render {count}</h2>
    </>
  )
}

export default Timer;