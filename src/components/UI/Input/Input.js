import React from 'react';
import classes from './input.module.css';

const input = (props) => {
    let inputElement = null;

    const inputClasses = [classes.InputElement];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed} className={inputClasses.join(' ')} />
            break;
        case('textarea'):
            inputElement = <textarea {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
        case('select'):
            inputElement = (
                <select value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map(options=>(
                        <option value={options.value} key= {options.value}>
                            {options.displayValue}
                        </option>
                    ))}
                </select>
            )
            break;
        default:
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed} />
    }

    return(
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;