import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Cake from '../../components/Cake/Cake';
/**
 * CakeBuilder is the MAIN PAGE where both 
 * the cake ingredients
 * and the Cake will be displayed
 */

class CakeBuilder extends Component {

    /**
     * To manage the state of ingredient dynamically
     */
    state = {
        ingredients: {
            icing1 : 1,
            icing2 : 2,
            icing3 : 1,
            icing4 : 2
        }
    }

    render(){
        return(
            <Aux>
                <Cake ingredients = {this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default CakeBuilder;