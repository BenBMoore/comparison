import React from 'react';

import classes from './Header.module.css';
import Logo from '../../elements/Logo/Logo';

export const Header = () =>
    <header className={classes.Header}>
        <Logo />
    </header>

