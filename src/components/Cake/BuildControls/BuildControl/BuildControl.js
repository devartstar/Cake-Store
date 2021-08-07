import React from 'react';
import classes from './BuildControl.module.css';

/**
 * Build Control component helps to manage 
 * the individual Ingredients being added or removed
 * @param {All the ingredients List} props 
 * @returns Idengredient
 */
const BuildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.label}>{props.label}</div>
            <button className={classes.More} onClick={props.added} >More</button>
            <button className={classes.Less}>Less</button>
        </div>
    )
}

export default BuildControl;