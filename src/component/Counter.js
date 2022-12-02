import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0)

    const countWithState = () => {
        const updateCount = count + 1
        console.log (`clicked ${updateCount} times`)
        setCount(updateCount)
    }

  return (
    <>
        <div>
            <button onClick={countWithState}>Click Me</button>
            <p>Here we go {count} times</p>
        </div>
    </>
  )
}

export default Counter