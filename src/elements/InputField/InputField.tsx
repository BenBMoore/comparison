import React from 'react';

import classes from './InputField.module.css';

const inputField = (props: any) => {
    return (
        <div className={classes.InputFieldWrapper}>
            <label>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.handleChange}
                required
            />
        </div>


    );
}

export default inputField;