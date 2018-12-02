import styled from 'styled-components';

export const NavigationMainContainer  = styled.div `
    margin-top: 5px;
    margin-bottom: 5px;
`

export const NavigationIcon = styled.span `
    margin-left: 5px;
    font-size: 40px;
    width: 100%;
`

export const NavigationIconDiv = styled.div `
    width: 3%;
    float: left;
    font-size: 40px;
    font-weight: 900;
    text-align: center;    
`

export const NavigationContainer = styled.ul `
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

export const NavigationItem = styled.li `
    float: left;

    :hover {
        color: rgb(0, 120, 212);
    }            
`

export const NavigationItemLink = styled.a`
    display: block;
    text-align: center;
    padding: 5px 16px;
    text-decoration: none;
    color: rgb(102, 102, 102);
`

