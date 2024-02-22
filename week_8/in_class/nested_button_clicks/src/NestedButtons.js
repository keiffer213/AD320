import React from 'react'

const NestedButtons = () => {
  
    const handleOuterClick = () => {
        alert('Outer Button Clicked!');
    };

    const handleInnerClick = (e) => {
        e.stopPropagation();
    
        alert('Inner Button Clicked!')
    };
  
  
    return (
        <div>
        <button onClick={handleOuterClick}>
          Outer Button
          <button onClick={handleInnerClick} style={{ margin: '10px' }}>
            Inner Button
          </button>
        </button>
      </div>
  )



};



export default NestedButtons