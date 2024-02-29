import React from 'react'


const AlertButton = ({message, children}) => {
  
  const customClick = () => {
    alert(message);
  };
  
  
    return (
    <div>
        <button onClick={customClick} style={{margin: '10px'}}>
        {children}
        </button>
    </div>
  )
}

export default AlertButton