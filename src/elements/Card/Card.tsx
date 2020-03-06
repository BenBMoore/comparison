import React from 'react';
import classes from './Card.module.css';

const Card = (props: any) => {
    return (
        <div className={classes.Card}>
            <ul>
                <li>{props.data.broker_name}</li>
                <li>{props.data.dealing_charge}</li>
                <li>{props.data.platform_cost}</li>
                <li>{props.data.max_platform_cost}</li>
            </ul>
        </div>

    );
}

export default Card;