import React, { Component } from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Icing1', type:'icing1'},
    { label: 'Icing2', type:'icing2'},
    { label: 'Icing3', type:'icing3'},
    { label: 'Icing4', type:'icing4'},
]

const buildControls = (props) => (
    <div className = {classes.BuildControls}>
        {controls.map(ctrl =>(
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)} />
        ))}
    </div>
)

export default buildControls;