import React from 'react';
import PropTypes from 'prop-types';
import {NavigationMainContainer, 
        NavigationIcon, 
        NavigationIconDiv, 
        NavigationContainer, 
        NavigationItem, 
        NavigationItemLink } from './GlobalNavigationComponents';

/** Component to show a menu bar */
const GlobalNavigation = ({title, currentUrl, globalNavigationItems}) => {
    return (
        <NavigationMainContainer>
            <NavigationIconDiv>
                <NavigationIcon className= {`ms-Icon ms-Icon--Family `} title={title}></NavigationIcon>
            </NavigationIconDiv>
            <NavigationContainer>
                {Object.keys(globalNavigationItems).map(key=> {
                    if(currentUrl === globalNavigationItems[key].url){
                        return(
                            <NavigationItem key={key}>
                                <span>{globalNavigationItems[key].name}</span>
                            </NavigationItem>
                        );
                    }else{
                        return(
                            <NavigationItem key={key}>
                                <NavigationItemLink href={globalNavigationItems[key].url}>{globalNavigationItems[key].name}</NavigationItemLink>
                            </NavigationItem>   
                        );
                    }
                })}
            </NavigationContainer>
        </NavigationMainContainer> 
    )
}

GlobalNavigation.propTypes = {
    /** Title of Global Navigation */
    title: PropTypes.string,

    /** Current Url Global Navigation */
    currentUrl: PropTypes.string,
    
    /** Global Navigation Items*/
    globalNavigationItems: PropTypes.array
}


export default GlobalNavigation;