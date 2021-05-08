import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) =>{
    return(
        <div>
            <h4>I hope the taste of your burger is well!..</h4>
            <div>
                <Burger ingredients={props.ingredients}  />
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>Continue</Button>
        </div>
    );
}

export default checkoutSummary;