import React from 'react'
import AlertButton from './AlertButton';

const buttons = [
    { message: 'Downloading!', children: 'Download File' },
    { message: 'Sharing!', children: 'Share Document' },
    // Add more button objects as needed
  ];

const Toolbar = () => {
  

  
    return (
        <div>
            <h1>Toolbar:</h1>
            {buttons.map(buttonItem => <AlertButton key={buttonItem.message}  message={buttonItem.message}>{buttonItem.children}</AlertButton>)}
        </div>
  )
}

export default Toolbar