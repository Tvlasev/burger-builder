import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
        {
            !props.isAuth
            ? (<NavigationItem link="/auth">Sign In</NavigationItem>)
            : (<NavigationItem link="/logout">logout</NavigationItem>)
        }
    </ul>
);

export default navigationItems;