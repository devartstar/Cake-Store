import React from 'react';
import classes from './Cake.module.css';
import CakeIngredient from './CakeIngredient/CakeIngredient';

/**
 * Cake design changes will be rendered from the change in the Cake Ingredients
 */

const Cake = (props) => {
    /**
     * Transform object of Key Value pair into an array and pass it 
     * to the CakeIngredient Component thru a loop
     */
    /** Will return an array of string of ingredients 
     * [icing1, icing2,icing2, icing3, icing4] */
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey=>{
            return [...Array(props.ingredients[igKey])].map((_, i)=>{
                return <CakeIngredient key = {igKey+i} type={igKey} />;
            })
        }).reduce((arr, el) => {
        return arr.concat(el)
    }, [] );
    console.log(transformedIngredients);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please Start adding Cake Layers</p>;
    }
    return (
        <div className={classes.Cake}>
            <CakeIngredient type="cake-top" />
            {transformedIngredients}
            <CakeIngredient type="cake-bottom" />
        </div>
    )
}

export default Cake
