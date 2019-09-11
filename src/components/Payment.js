import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../components/styles/Payment.css';

class Payment extends Component {
    render() {
        return (
            <div>

                <div className="payment-form">

                    <div className="payment-imgs">
                        <img className="payment-img" src="mada.png"/>
                        <img className="payment-img" src="mastercard.png"/>
                        <img className="payment-img" src="visa.png"/>
                    </div>

                <Form>
                <Label>Card number</Label>
                <Input  placeholder="Card Number" className="card-number-input"/>

                <Label>Name on card</Label>
                <Input  placeholder="Name on Card" className="card-name-input"/>

                <Label>Security Code</Label>
                <Input type="password" placeholder="Security Code" maxlength="3" className="card-code-input"/>

                <Label>Expiry date</Label>
                <Input type="date" className="card-date-input"/>
                </Form>
                </div>

            </div>
        )
    }
}

export default Payment;
