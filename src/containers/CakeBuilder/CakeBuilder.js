import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Cake from '../../components/Cake/Cake';
/**
 * CakeBuilder is the MAIN PAGE where both 
 * the cake ingredients
 * and the Cake will be displayed
 */

class CakeBuilder extends Component {
    render(){
        return(
            <Aux>
                <Cake />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default CakeBuilder;