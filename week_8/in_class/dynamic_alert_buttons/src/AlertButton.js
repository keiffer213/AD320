import React from 'react'

const AlertButton = ({message, children}) => {
  
  const dynamicButton = () => {
    alert(message);
  };
  
    return (
    <div>
        <button onClick={dynamicButton} style={{margin : '10px'}}>
        {children}
        </button>
    </div>
  )
}

export default AlertButton