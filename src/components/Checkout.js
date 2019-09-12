import React, { Component } from 'react';
import '../components/styles/Checkout.css';


export class Checkout extends Component {
    render() {
        return (
            <div>
                <div className="placeorder-form">
                <h1 className="logo" >THE STORE</h1>
                <h4> Thank you for choosing THE STORE!</h4>
                <h3>When your order is ready to be shipped,<br/>
                     we’ll process your payment and email you with details of delivery.</h3>
<br/>
                     <p>For order queries, contact customer care <br/>
                          e: customercare@thestore.com</p>
                     </div>
            </div>
        )
    }
}

export default Checkout
