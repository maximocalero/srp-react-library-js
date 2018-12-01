import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import styled from 'styled-components';
import { BaseToolBarContainer, ToolBarItem, ToolBarItemLink } from './ShortcutsComponents';
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

/** Toolbar with shorcuts to navigate to most used sites */
function Shortcuts ({alignment, shortcutItems}) {
    const ToolBarContainer = styled(BaseToolBarContainer)`
        &&& {
           text-align: ${alignment};
        }
    `
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