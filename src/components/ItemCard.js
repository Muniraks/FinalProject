import React, { Component } from 'react';
import '../components/styles/ItemCard.css';


import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';

class ItemCard extends Component {
    render() {
        return (
            <div>
            <Card className="item-card">
              <CardImg className="card-image"  src="https://cdn.thesolesupplier.co.uk/2017/09/adidas-NMD-R1-Primeknit-Japan-Triple-Black.png"/>
              <CardBody>
                <CardTitle>Item: </CardTitle>
                <CardText>$PRICE</CardText>
              <img className="add-to-cart-btn" src="addtocart.png"/>
              </CardBody>
            </Card>
          </div>

        

        

        )
    }
}

export default ItemCard;
