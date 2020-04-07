import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary'

class Checkout extends Component {
  //dummy data for now
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data')
  }

  render(){
    const { ingredients } = this.state

    return(
      <div>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
          ingredients={ingredients}
        />
      </div>
    )
  }
}

export default Checkout