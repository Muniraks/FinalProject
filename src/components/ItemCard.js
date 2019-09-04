import React, { Component } from 'react';
import './ItemCard.css';

import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';

class ItemCard extends Component {
    render() {
        return (
            <div>
            <Card className="item-card">
              <CardImg className="card-image" top width="100%" src="https://rimage.gnst.jp/livejapan.com/public/img/common/noimage.jpg?20190630050037" alt="Card image cap" />
              <CardBody>
                <CardTitle>Item: </CardTitle>
                <CardText>$PRICE</CardText>
                <Button className="item-btn">Add to Cart</Button>
              </CardBody>
            </Card>
          </div>

        

        )
    }
}

export default ItemCard;
