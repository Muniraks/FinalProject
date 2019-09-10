import React, { Component } from 'react';
import '../components/styles/Cart.css';


export class Cart extends Component {
    
     render() {

        this.state = {
            cart:[],
          }
          let total = 0;

          const productList = this.props.cart.map(product=>{  
            total += product.price;
             
             return(<tr>
            <td>{product.type}</td>
            <td>{product.price}</td>
            <td> <input type="number" min="1" value="1" className="cart-input"/> </td>
          <img src="removebtn.png" className="remove-btn" onClick=""></img>
             </tr>)
          })

        return (
            <div>

                <table class="table">
                    <thead>
                        <h3>My Cart</h3>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Remove</th>

                        </tr>
                    </thead>
                    <tbody>
                     {productList}

                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td>{total} SAR</td>
                            <td><button className="checkout-btn" type="button">Checkout</button></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
export default Cart;
