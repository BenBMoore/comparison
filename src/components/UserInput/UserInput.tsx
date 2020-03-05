import React from 'react'

import classes from './UserInput.module.css';
import InputField from '../../elements/InputField/InputField';
import Button from '../../elements/Button/Button';


export const UserInput = () => {
    return (
        <div className = {classes.UserInputWrapper}>
            <InputField/>
            <InputField/>
            <Button/>
        </div>
    )
}
