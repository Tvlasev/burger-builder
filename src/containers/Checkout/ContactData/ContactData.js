import React, { Component } from 'react'

import Button from "../../../components/UI/Button/Button";
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false,
  }

  orderHandler = (e) => {
    e.preventDefault();
    const { ingredients, price } = this.props
    const order = {
        ingredients,
        //TODO: calculate the price on the backend, not here
        price: price,
        //dummy data for the customer
        customer: {
            name: "Todor Vlasev",
            address: {
                street: "Parensov",
                zipCode: "1000",
                country: "Bulgaria",
                city: "Sofia"
            },
            email: "timby@gmail.com"
        },
        deliveryMethod: "fast"
    }
        this.setState({ loading: true })
        axios.post("/orders.json", order)
            .then(res => {
              this.setState({ loading: false, purchasing: false })
              this.props.history.push("/")
            })
            .catch(e => this.setState({ loading: false, purchasing: false }))
  }

  render(){
    return(
      <div className={classes.ContactData}>
        <h4> Enter your Contact Data</h4>
        {this.state.loading
          ? <Spinner />
          : (
            <form>
              <input className={classes.Input} type='text' name='name' placeholder="Your Name" />
              <input className={classes.Input} type='text' name='email' placeholder="Your Email" />
              <input className={classes.Input} type='text' name='street' placeholder="Street" />
              <input className={classes.Input} type='text' name='postal' placeholder="Postal Code" />
              <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
          )
        }
      </div>
    )
  }
}

export default ContactData;