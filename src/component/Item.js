import React from 'react';

const Item = ({name,isShow}) => {

    if (isShow) {
        return <li>{name} It's true</li>
    }else{
        return <li>{name}</li>
    }

//   return (
//     <>
        
//     </>
//   )
}

export default Item;