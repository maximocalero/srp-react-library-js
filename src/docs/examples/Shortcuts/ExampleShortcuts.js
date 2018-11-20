import React from 'react';
import Shortcuts from 'srp-react-library-js/Shortcuts';

/** Custom message */
export default function ExampleShortcuts() {
    const shorCuts = 
    [
        {
            "name": "My site",
            "url": "https://sirpointdevs-my.sharepoint.com",
            "description": "Onedrive",
            "target": "",
            "iconName": "OneDrive",
            "className" : "ms-Icon ms-Icon--OneDrive"
        },
        {
            "name": "Office 365 Delve",
            "url": "https://nam.delve.office.com/",
            "description": "Office 365 Delve site",
            "target": "",
            "iconName": "DelveLogo",
            "className" : "ms-Icon ms-Icon--DelveLogo"
        },
        {
            "name": "All Users Directory",
            "url": "https://outlook.office.com/owa/?realm=sirpoint.com&exsvurl=1&ll-cc=1033&modurl=0&path=/people",
            "description": "All Users Directory",
            "target": "",
            "iconName": "CompanyDirectory",
            "className" : "ms-Icon ms-Icon--CompanyDirectory"
        }
    ] 
    
    return <Shortcuts alignment = "right" shortcutItems = {shorCuts} />
}