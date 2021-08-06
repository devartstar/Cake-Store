import React, {Component} from 'react';
import Aux from '../../hoc/Aux';

/**
 * CakeBuilder is the MAIN PAGE where both 
 * the cake ingredients
 * and the Cake will be displayed
 */

class CakeBuilder extends Component {
    render(){
        return(
            <Aux>
                <div>Burger</div>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default CakeBuilder;