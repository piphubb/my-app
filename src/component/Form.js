import React from 'react';

const Form = () => {

    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const fullName = firstName + ' ' + lastName

    function handleFirstName(e){
      setFirstName (e.target.value)
    }

    function handleLastName(e){
      setLastName (e.target.value)
    }

  return (
    <>
        <input type="text" placeholder='First Name' value={firstName} onChange={handleFirstName}></input>
        <input type="text" placeholder='Last Name' value={lastName} onChange={handleLastName}></input>
        <p>You'r name is : {fullName} </p>
    </>
  )
}

export default Form;