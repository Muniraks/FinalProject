import React, { Component } from 'react';

import ItemCard from './ItemCard';

 class Products extends Component {
    render() {
        return (
            <div>
                <p>Hi, This is Products Page</p>
                <ItemCard/>
            </div>
        )
    }
}

export default Products;
