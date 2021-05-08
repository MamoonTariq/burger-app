import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems  = (props) =>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.isAuthanticated ? <NavigationItem link="/orders" >Orders</NavigationItem> : null }
        {!props.isAuthanticated 
            ? <NavigationItem link="/auth" >Authunticate</NavigationItem>
            : <NavigationItem link="/logout" >Logout</NavigationItem>}
    </ul>
);

export default navigationItems;