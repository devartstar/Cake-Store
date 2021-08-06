import React from 'react';
import classes from './Cake.module.css';
import CakeIngredient from './CakeIngredient/CakeIngredient';

/**
 * Cake design changes will be rendered from the change in the Cake Ingredients
 */

const Cake = (props) => {
    return (
        <div className={classes.Cake}>
            <CakeIngredient type="cake-top" />
            <CakeIngredient type="icing-1" />
            <CakeIngredient type="icing-2" />
            <CakeIngredient type="icing-3" />
            <CakeIngredient type="icing-4" />
            <CakeIngredient type="cake-bottom" />
        </div>
    )
}

export default Cake
