import React from 'react'

import classes from './UserInput.module.css';
import InputField from '../../elements/InputField/InputField';
import Button from '../../elements/Button/Button';


export const UserInput = (props: any) => {
    return (
        <div className = {classes.UserInputWrapper}>
            <InputField
                name="lumpsum"
                type="number"
                label="Initial Lump Sum"
                placeholder="1000"
                value={props.lumpsum}
                handleChange={props.onChangeHandler}
                />
            <InputField
                name="monthlysum"
                type="number"
                label="Monthly Contribution"
                placeholder="500"
                value={props.monthsum}
                handleChange={props.onChangeHandler}
                />
            <Button
                name="calculateBroker"
                type="submit"
                position="null"
                clicked={props.onClickHandler}>Calculate</Button>           
        </div>
    )
}
