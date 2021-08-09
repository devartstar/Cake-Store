import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Cake from '../../components/Cake/Cake';
import BuildControls from '../../components/Cake/BuildControls/BuildControls';
/**
 * CakeBuilder is the MAIN PAGE where both 
 * the cake ingredients
 * and the Cake will be displayed
 */

const INGREDIENT_PRICES = {
    icing1 : 100,
    icing2 : 120,
    icing3 : 130,
    icing4 : 140,
}

class CakeBuilder extends Component {

    /**
     * To manage the state of ingredient dynamically
     */
    state = {
        ingredients: {
            icing1 : 0,
            icing2 : 0,
            icing3 : 0,
            icing4 : 0
        },
        totalPrice : 100,
        purchasable : false,
    }
    /**
     * Update Purchase state helps to update weter the  burger is purchasable(has some ingredients/ icing)
     * @param {new count of Ingredeients after addition or deletian} ingredients 
     */
    updatePurchaseState (ingredients) {

        const sum = Object.keys(ingredients).map(igKey =>{
            return ingredients[igKey];
        }).reduce((sum,ele)=>{
            return sum + ele;
        }, 0);
        this.setState({purchasable : sum>0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients ={
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngredients ={
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0 
        }
        return(
            <Aux>
                <Cake ingredients = {this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price ={this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                />
            </Aux>
        );
    }
}

export default CakeBuilder;