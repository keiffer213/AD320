import React from 'react'
import AlertButton from './AlertButton';


const Toolbar = () => {
  return (
    <div>
        <h2>Toolbar: </h2>
        <AlertButton message={"Hello!"}>Hello!</AlertButton>
        <AlertButton message={"Bye!"}>Bye!</AlertButton>
    </div>
  )
}

export default Toolbar