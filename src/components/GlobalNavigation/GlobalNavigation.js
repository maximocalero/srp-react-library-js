import React from 'react';
import PropTypes from 'prop-types';
import styles from './globalNavigation.module.css';
// import styled from 'styled-components';

import NavigationItem from '../../componentsProps/ItemNavigation';

const GlobalNavigation = ({title, currentUrl, globalNavigationItems}) => {
    return (
        <div className={styles.divContainer}>
        <div className={styles.marginDiv}>
            <span className= {`ms-Icon ms-Icon--Family ${styles.menuIcon}`} title={title}></span>
        </div>
        <ul className={styles.navigationBar}>
            {Object.keys(globalNavigationItems).map(key=> {
                if(currentUrl === globalNavigationItems[key].url){
                    return(
                        <li className={styles.navigationItemSelected} key={key}>
                            <span>{globalNavigationItems[key].name}</span>
                        </li>
                    );
                }else{
                    return(
                        <li className={styles.navigationItem} key={key}>
                            <a className={styles.navigationItem} href={globalNavigationItems[key].url}>{globalNavigationItems[key].name}</a>
                        </li>   
                    );
                }
            })}
        </ul>
    </div> 
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