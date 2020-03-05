import React from 'react';
import classes from './Card.module.css';

const inputField = () => {
    return (
        <div className = {classes.Card}>
            <ul>
                <li>Broker Number 1</li>
                <li>Initial Charge</li>
                <li>Ongoing Costs</li>
            </ul>
        </div>


    );
}

export default inputField;