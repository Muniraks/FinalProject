import React, { Component } from 'react';
import { Input } from 'reactstrap';
import '../components/styles/ItemCard.css';
import { Link } from 'react-router-dom';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

class ItemCard extends Component {

    handleAddToCart = (e) => {
        this.props.addToCart(this.props.id)
    }

    renderOwnerBtns = () => {
        const { owner, user, } = this.props;
        if (user) {
            if (owner === user._id) {
                return (
                    <div>
                        <Link to={`/updateProduct/${this.props.id}`}> 
                        <img src="edit.png" className="edit-btn"/> 
                        </Link>
                        <img className="remove-btn" src="removebtn.png" onClick={this.props.deleteItem} />

                    </div>
                )
            }
        }
    }
    render() {


        return (
            <div className="Item-cards-div">
                <Card className="item-card">
                    <CardImg className="card-image" src={this.props.productImage} />
            
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
                     <div className="btns">
                     <img className="add-to-cart-btn" src="addtocart.png" onClick={this.handleAddToCart} />

                       {this.renderOwnerBtns()}
                       </div>
                    
                      
                    </CardBody>
                </Card>
            </div>





        )
    }
}

export default ItemCard;
