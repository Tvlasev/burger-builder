import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';

import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
  return(
    <div className={classes.checkoutSummary}>
      <h1>Thank you for your order!</h1>
      <div className={classes.burgerContainer}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>ORDER</Button>
    </div>
  )
}

export default CheckoutSummary