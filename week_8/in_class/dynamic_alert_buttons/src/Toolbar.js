import React from 'react'
import AlertButton from './AlertButton';

const buttons = [
    { message: 'Downloading!', children: 'Download File' },
    { message: 'Sharing!', children: 'Share Document' },
    { message: 'Liking!', children: ''},
    { message: 'Liking!'},
    { message: '', children: 'Disliking!'},
    { children: 'Disliking!'},
    { message: '', children: ''},
    { },
    // Add more button objects as needed
  ];

const Toolbar = () => {
  
  
    return (
        <div>

            <h1>Toolbar:</h1>

            {/* Implemented multiple methods of rendering the different edge cases */}
            <h2>First Method of Rendering</h2>
            {buttons.map((buttonItem, index) => 
              // Conditional of message && children, if one is empty do not render
              buttonItem.message && buttonItem.children ? (
                <AlertButton key={index} message={buttonItem.message}>
                  {buttonItem.children}
                </AlertButton>
              ) : null
            )}

            <h2>Second Method of Rendering</h2>
            {buttons.map((buttonItem, index) => {
              // Check if the message or children is null or empty
              const isNotNullOrEmpty = buttonItem.message && buttonItem.children;

              //conditionally render AlertButton
              return (
                  isNotNullOrEmpty && (
                    <AlertButton key={index} message={buttonItem.message}>
                      {buttonItem.children}
                    </AlertButton>
                  )
              );
            })}

            {/* Just to see how the buttons would render without conditions */}
            <h2>All Buttons Rendered</h2>
            {buttons.map((buttonItem, index) => 
              <AlertButton key={index} message={buttonItem.message}>
                {buttonItem.children}
              </AlertButton>
            )}

        </div>
  );
}

export default Toolbar