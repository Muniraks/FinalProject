import React, { Component } from 'react';
import axios from 'axios';

import ItemCard from './ItemCard';
import '../components/styles/Products.css';


 class Products extends Component {


  deleteItem(id){
    const getUserToken = localStorage.getItem('userToken')
    const token = {
        headers: {
            Authorization: `bearer ${this.props.user.token}`
        }
    }
    // const getOwnerId = localStorage.getItem('ownerId')
    // console.log(getOwnerId)

    console.log("id and token",getUserToken)
    
    axios.delete(`http://localhost:3000/products/${id}`, token)
    .then(res => {
        console.log('deleted',res)
    })

    .catch(err => {
        console.log(this.state)
        console.log(err)
    })
  }
    
componentDidMount() {
  axios.get('http://localhost:3000/products')
  .then(res => {
    console.log(res)
  })
  .catch(err => (console.log(err)))
}
    render() {
      console.log(this.props.user);
      


        const products = this.props.products.map(product => 
        <ItemCard 
        type={product.type} 
        size={product.size} 
        brand={product.brand} 
        productImage={product.productImage}
        price={product.price}
        deleteItem={()=>this.deleteItem(product._id)}
        key={product._id} 
        id={product._id}

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