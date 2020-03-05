import React from 'react';

import classes from './Button.module.css';

const button = () => {
    return (
        <div className={classes.ButtonWrapper}>
            <button>Calculate</button>
        </div>

    );
}

export default button;