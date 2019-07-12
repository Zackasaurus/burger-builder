
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

import React, { Component } from 'react'

export class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[Order Summary] WillUpdate')
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(i => {
                return (<li key={i}><span>{i}</span>: {this.props.ingredients[i]}</li>)
            })

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary
