import React from 'react';
import PropTypes from 'prop-types';
import styles from './shortcuts.module.css';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

/** Component to show shortcuts with an icon */
function Shortcuts ({alignment, shortcutItems}) {
    const containerAlign = () => {
        if (alignment === "center"){
            return styles.center;
        }
        if (alignment === "left"){
            return styles.left;
        }
        if (alignment === "right"){
            return styles.right;
        }        
    }

    return (
        <div>
            <ul className= {`${styles.toolBarContainer} ${containerAlign()}`} >
                {Object.keys(shortcutItems).map(key=>{
                    return(                
                        <li className={styles.toolBarItem} key = {key}>
                            <a className={styles.navigationItem} href={shortcutItems[key].url} target= {shortcutItems[key].target}>
                                <Icon iconName = {shortcutItems[key].iconName} className = {shortcutItems[key].className} title = {shortcutItems[key].name}/>
                            </a>
                        </li>   
                    );
                })}
            </ul>        
        </div>
    );
}

Shortcuts.propTypes = {
    /** Alignment */
    alignment: PropTypes.string,
    /** Array of shortcuts to show */
    shortcutItems: PropTypes.array
}

export default Shortcuts;