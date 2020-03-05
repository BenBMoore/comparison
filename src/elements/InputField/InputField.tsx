import React from 'react';

import classes from './InputField.module.css';

const inputField = () => {
    return (
        <div className = {classes.InputFieldWrapper}>
            <label>Enter your monies</label>
            <input type="number" min="0.01" step="0.01"></input>
        </div>


    );
}

export default inputField;