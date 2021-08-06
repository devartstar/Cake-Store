import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './CakeIngredient.module.css';

/**
 * State to handel the changes in the ingredients of the Cake
 * and to pass them to Cake to display the changes
 * Also added Prop- Type Validiation
 */

class CakeIngredient extends Component{
    render(){
        let ingredient = null;
        switch(this.props.type){
            case('cake-top'):
                ingredient = <div className = {classes.CakeTop}></div>;
                break;
            case('cake-bottom'):
                ingredient = <div className = {classes.CakeBottom}></div>;
                break;
            case('icing1'):
                ingredient = (
                    <div className = {classes.Icing1}>
                        {/* <div className = {classes.Chocolate}></div> */}
                        {/* <div className = {classes.Strawberry}></div> */}
                    </div>
                );
                break;
            case('icing2'):
                ingredient = (
                    <div className = {classes.Icing1}>
                        {/* <div className = {classes.Chocolate}></div> */}
                    </div>
                );
                break;
            case('icing3'):
                ingredient = (
                    <div className = {classes.Icing1}>
                        {/* <div className = {classes.Strawberry}></div> */}
                    </div>
                );
                break;    
            case('icing4'):
                ingredient = (
                    <div className = {classes.Icing1}>
                    </div>
                );
                break;    
            default : 
                ingredient = null;
        }
       return ingredient;
    }
};


CakeIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default CakeIngredient;