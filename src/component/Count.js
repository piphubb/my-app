import React, { useState } from 'react';


const Count = () => {
    //top level
    const [count, setCount] = useState(0);

  return (
    <>
        <button onClick={() =>setCount(count + 1)}>Click Me</button>
        <p>You are Click My ass {count}</p>
    </>
  )
}

export default Count;