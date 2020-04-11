import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary'
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData'

class Checkout extends Component {
  //dummy data for now
  state = {
    ingredients: null,
    price: 0
  }

  componentWillMount(){
    const query = new URLSearchParams(this.props.location.search)
    let price = 0;
    const ingredients = {

    }
    for(let param of query.entries()){
      if(param[0] === 'price'){
        price = param[1]
      }else{
        ingredients[param[0]] = +param[1]
      }
    }
    this.setState({ingredients: ingredients, totalPrice: price})
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
          ingredients={ingredients}/>
        <Route 
        path={this.props.match.path + "/contact-data"} 
        render={(props) => (<ContactData 
                          ingredients={ingredients}
                          price={this.state.totalPrice}
                          {...props}
                        />)}/>
      </div>
    )
  }
}

export default Checkout