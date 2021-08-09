import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.module.css';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}


export default toolbar;