import React from 'react'
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}><span style={{textTransform : 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A Delicious Cake customize by you -</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue to CheckOut !!!</p>
            <Button btnType="Danger" clicked={props.purchaseContinued}>PROCEEDE</Button>
            <Button btnType="Success" clicked={props.purchaseCancelled}>CANCEL</Button>
        </Aux>
    )
}


export default orderSummary;