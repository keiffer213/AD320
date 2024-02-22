//rafce

import React from 'react'

export const FeatureToggle = ({isEnabled, featureName}) => {

    let outputString = "";

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
