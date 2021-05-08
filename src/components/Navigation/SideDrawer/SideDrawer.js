import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aoux/Aoux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) =>{

    let attachedClasses = [classes.SideDrawer , classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer , classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <nav>
                    <NavigationItems isAuthanticated={props.isAuth}/> 
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;