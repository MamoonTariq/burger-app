import React , {Component} from 'react';
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import classes from './ContactData.module.css';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLenght: 15
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Your Street'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLenght: 5
                },
                valid: false,
                touched: false
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Zip Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLenght: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter your Country'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLenght: 5
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: "fastest" , displayValue: "Fastest"},
                        {value: "cheapest" , displayValue: "Cheapest"}
                    ]
                },
                value: 'fastest',
                validation: {},
                valid: true,
                touched: false
            }
        },
        formIsValid: false
    }


    orderHander = (event) =>{
        event.preventDefault();
        
        const formData = {};
        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData,
            userId: this.props.userId
        }
        // console.log(order.ingredients);
        this.props.onOrderBurger(order , this.props.token);
       // console.log('thisoso' + order.orderData.country);
        
    }

    checkValidity(value , rules){
        let isValid = true;

        if (!rules) {
            return true;
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLenght) {
            isValid = value.length <= rules.maxLenght && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) =>{

        //console.log(event.target.value);
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value , updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for(let inputIdentifier in updatedOrderForm){
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
        }

        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    render(){
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHander}>
                {formElementsArray.map(formElement =>(
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        value = {formElement.config.value}
                        invalid = {!formElement.config.valid}
                        shouldValidate = {formElement.config.validation}
                        touched ={formElement.config.touched}
                        changed={ (event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success_Order" disabled={!this.state.formIsValid}>Order</Button>
            </form>
        );
        if (this.props.loading) {
            form = <Spinner/>
        }   

        return(
            <div className={classes.OrderForm}>
                <h3>Enter Your Contact Data</h3> 
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData,token) => dispatch(actions.purchaseBurger(orderData,token))
    };
};

export default connect(mapStateToProps , mapDispatchToProps)(withErrorHandler(ContactData, axios ));