import React from 'react'
import CakeLogo from '../../assets/images/cake-logo.png';
import classes from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={CakeLogo} alt="My Cake Logo" />
        </div>
    )
}

export default logo;