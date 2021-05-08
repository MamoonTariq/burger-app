import React from 'react';
import classes from './Order.module.css';

const order = (props) =>{

    const ingredients = [];
    for(let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span key={ig.name}>{ig.name} ({ig.amount}) </span>;
    });

    return (
        <div className={classes.Orders}>
            <div>Ingredients: {ingredientOutput}</div>
            <p>Price: <strong className={classes.OrdersPrice}>USD  {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}

export default order;