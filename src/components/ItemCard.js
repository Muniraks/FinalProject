import React, { Component } from 'react';
import {Input } from 'reactstrap';
import '../components/styles/ItemCard.css';


import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';

class ItemCard extends Component {

    handleAddToCart = (e)=> {
       this.props.addToCart(this.props.id) 
    }


    render() {

        
        return (
            <div className="Item-cards-div">
            <Card className="item-card">
              <CardImg className="card-image"  src={this.props.productImage}/>
              <CardBody>
                <CardTitle>{this.props.type}</CardTitle>
                <CardText>{this.props.price}SAR</CardText>
                <Input className="size-list" type="select" name="select size" id="exampleSelect">
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </Input>
              <img className="add-to-cart-btn" src="addtocart.png" onClick={this.handleAddToCart}/>

              {/* <img className="add-to-cart-btn" src="addtocart.png" onClick={this.props.deleteItem}/> */}
              </CardBody>
            </Card>
          </div>

        

        

        )
    }
}

export default ItemCard;
