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
                  <div className="product-info-body">
                <CardTitle>type:{this.props.type}</CardTitle>
                <CardText>Price: {this.props.price}SAR</CardText>
                <Input className="size-list" type="select" name="select size" id="exampleSelect">
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </Input>
            </div>
              <img className="remove-btn" src="removebtn.png" onClick={this.props.deleteItem}/>
              <img className="add-to-cart-btn" src="addtocart.png" onClick={this.handleAddToCart}/>
              </CardBody>
            </Card>
          </div>

        

        

        )
    }
}

export default ItemCard;
