import React from 'react'

const Content = () => {

    const Message = () => {
        alert ("Thank You")
    }

  return (
    <>
        <button onClick={Message}>Click Me</button>
    </>
  )
  
}

export default Content;