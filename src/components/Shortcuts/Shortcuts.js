import React from 'react';
import PropTypes from 'prop-types';
// import styles from './shortcuts.module.css';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import styled from 'styled-components';
import { BaseToolBarContainer, ToolBarItem, ToolBarItemLink } from './ShortcutsComponents';
import { initializeIcons } from '@uifabric/icons';
// import { styled } from '@uifabric/utilities';
initializeIcons();

/** Toolbar with shorcuts to navigate to most used sites */
function Shortcuts ({alignment, shortcutItems}) {
    // const containerAlign = () => {
    //     if (alignment === "center"){
    //         return styles.center;
    //     }
    //     if (alignment === "left"){
    //         return styles.left;
    //     }
    //     if (alignment === "right"){
    //         return styles.right;
    //     }        
    // }

    // const ToolBarContainer = styled.ul`
    //     list-style-type: none;
    //     width: 100%;
    //     margin: 0;
    //     padding: 0;
    //     overflow: hidden;
    //     height: 40px;
    //     font-size: 1.15em;
    //     text-align: ${alignment}
    // `

    // const ToolBarItem = styled.li`
    //     display: inline-block;
    //     padding-left: 7px;    
    // `

    // const ToolBarItemLink = styled.a`
    //     font-size: 1.5em;
    //     cursor: pointer;        
    // `
//     const BaseToolBarContainer = styled.ul`
//     list-style-type: none;
//     width: 100%;
//     margin: 0;
//     padding: 0;
//     overflow: hidden;
//     height: 40px;
//     font-size: 1.15em;
// `
    const ToolBarContainer = styled(BaseToolBarContainer)`
        &&& {
           text-align: ${alignment};
        }
    `
    //     text-align:right;
    // `

    return (
        <div>
            <ToolBarContainer>
                {Object.keys(shortcutItems).map(key=>{
                    return(                
                        <ToolBarItem key = {key}>
                            <ToolBarItemLink href={shortcutItems[key].url} target= {shortcutItems[key].target}>
                                <Icon iconName = {shortcutItems[key].iconName} className = {shortcutItems[key].className} title = {shortcutItems[key].name}/>
                            </ToolBarItemLink>
                        </ToolBarItem>   
                    );
                })}
            </ToolBarContainer>        
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