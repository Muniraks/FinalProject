import React, { Component } from 'react';
import '../components/styles/BrandProfile.css';

import ItemCard from './ItemCard';


export class BrandProfile extends Component {
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
            <div className="brand-profile">
                
                <div className="brand-header">
                <img className="brand-profile-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png"></img>
                </div>

                <div className="product-div">
               {products}
                </div>












                
            </div>
        )
    }
}

export default BrandProfile;
