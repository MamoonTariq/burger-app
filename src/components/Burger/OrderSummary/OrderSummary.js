import React from 'react';
import Aux from '../../../hoc/Aoux/Aoux';
import Button from '../../UI/Button/Button';

const ordersummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients).map(igKey =>{
        return (<li key={igKey}>{igKey}: {props.ingredients[igKey]}</li>);
    })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A Delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Price: </strong>{props.price.toFixed(2)}</p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    );

};

export default ordersummary;