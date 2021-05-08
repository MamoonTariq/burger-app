import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.DrawerToggleClicked}/>
        <div>BURGER</div>
        <nav className={classes.DesktopOnly}>
           <NavigationItems isAuthanticated={props.isAuth} />
        </nav>
    </header>
);

export default toolbar;