import React from 'react';
import PropTypes from 'prop-types';
import styles from './globalNavigation.module.css';
import styled from 'styled-components';

/** Component to show a menu bar */
const GlobalNavigation = ({title, currentUrl, globalNavigationItems}) => {
    const NavigationMainContainer  = styled.div `
        margin-top: 5px;
        margin-bottom: 5px;
    `

    const NavigationIcon = styled.span `
        margin-left: 5px;
        font-size: 40px;
        width: 100%;
    `

    const NavigationIconDiv = styled.div `
        width: 3%;
        float: left;
        font-size: 40px;
        font-weight: 900;
        text-align: center;    
    `

    const NavigationContainer = styled.ul `
        list-style-type: none;
        margin-top: 6px;
        width: 85%;
        padding: 0;
        overflow: hidden;
        height: 40px;
        font-size: 1.15em;
        color: rgb(102, 102, 102);
        float: left;
        width:80%;    
    `

    const NavigationItem = styled.li `
        float: left;

        :hover {
            color: rgb(0, 120, 212);
        }            
    `

    const NavigationItemLink = styled.a`
        display: block;
        text-align: center;
        padding: 5px 16px;
        text-decoration: none;
        color: rgb(102, 102, 102);
    `
    return (
        <NavigationMainContainer>
            <NavigationIconDiv>
                <NavigationIcon className= {`ms-Icon ms-Icon--Family ${styles.menuIcon}`} title={title}></NavigationIcon>
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