import React, { Fragment } from 'react'
import Catagory from './Catagory';
import Count from './Count';
import Form from './Form';
import Timer from './Timer';
import Counter from './Counter';


const Content = () => {

    const Message = () => {
        alert ("Thank You")
    }

    const sms = (sms) => {
      alert (sms);
    }

  return (
    <>
        <button onClick={Message}>Click Me</button>
        <button onClick={() => sms("hello")}>Click Me</button>
        <Catagory/>
        <Count/>
        <Form/>
        <Counter/>
        <Timer/>
    </>
  )
  
}

export default Content;