//rafce

import React from 'react'

export const FeatureToggle = ({isEnabled, featureName}) => {

    // I am handling the output by assigning a string that will be returned.
    let outputString = "";

    // if-else statement to assign the first string if true, and the 2nd if false
    if (isEnabled === true) {
        outputString = `isEnabled is ${isEnabled}, Feature ${featureName} is Enabled`
    } else {
        outputString = `isEnabled is ${isEnabled}, Feature ${featureName} is disabled`        
    }
  
  
    return (
    <div>
        {/* If isEnabled = true render featureName
        else if isEnabled = false render 'Feature [featureName] is disabled' */}
         <p>{outputString}</p>
    </div>
    )
}
