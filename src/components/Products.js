import React, { Component } from 'react';

import ItemCard from './ItemCard';
import '../components/styles/Products.css';


 class Products extends Component {
    

    render() {

        const products = this.props.products.map(product => 
        <ItemCard 
        type={product.type} 
        size={product.size} 
        brand={product.brand} 
        productImage={product.productImage}
        price={product.price}

        key={product.id} 
        id={product.id}

        addToCart={this.props.addToCart}
        />)

        return (
          <div className="product-div">
               {products}  
          </div>
               
           
        )
    }
}

export default Products;
