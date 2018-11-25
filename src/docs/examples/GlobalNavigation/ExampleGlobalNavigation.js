import React from 'react';
import GlobalNavigation from 'srp-react-library-js/GlobalNavigation';

/** Example of a menu bar Global Navigation */
export default function ExampleGlobalNavigation() {
    const globalNavigationItems = 
    [
        {
            "name": "News",
            "url": "https://sirpointdevs.sharepoint.com/sites/news",
            "description": "Corporate Company News Portal",
            "target": "",
            "className" : ""
        },
        {
            "name": "Human Resources",
            "url": "https://sirpointdevs.sharepoint.com/sites/hr",
            "description": "Human Resources Portal",
            "target": "",
            "className" : ""
        },
        {
            "name": "Learning",
            "url": "https://sirpointdevs.sharepoint.com/sites/learning",
            "description": "Learning Portal",
            "target": "",
            "className" : ""
        }
    ] 
    
    return <GlobalNavigation title="Global Navigation Example" currentUrl ="#" globalNavigationItems = {globalNavigationItems} />
}