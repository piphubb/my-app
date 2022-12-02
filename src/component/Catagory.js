import React from 'react';
import Item from './Item';

const Catagory = () => {
  return (
    <>
        <ul>
            <Item isShow={true} name="book"/>
            <Item isShow={false} name="Car"/>
            <Item isShow={false} name="Home"/>
            <Item isShow={true} name="Airplane"/>
        </ul>
    </>
  )
}

export default Catagory