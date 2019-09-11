import React, { Component } from 'react';
import '../components/styles/BrandProfile.css';

import axios from 'axios'

import ItemCard from './ItemCard';


export class BrandProfile extends Component {
    state = { brandProducts: []}
    componentDidMount(){
        axios.get(`http://localhost:3000/brands/${this.props.match.params.id}/products`)
        .then(res => {
            console.log("got products!",res)
            this.setState({brandProducts: res.data.products})
        })
        .catch(err => {
            console.log(err)
        })
    }

    // componentDidUpdate(){
    //     axios.get(`http://localhost:3000/brands/${this.props.match.params.id}/products`)
    //     .then(res => {
    //         console.log("got products!",res)
    //         this.setState({brandProducts: res.data.products})
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }
    deleteItem(id){
        console.log(this.props);
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
            this.props.handleDelete(id);
        })
    
        .catch(err => {
            console.log(this.state)
            console.log(err)
        })
      }

    render() {
        const products = this.state.brandProducts.map(product => 
            <ItemCard 
            name={product.name}
            type={product.type} 
            size={product.size} 
            brand={product.brand} 
            productImage={product.productImage}
            price={product.price}
    
            key={product._id} 
            id={product._id}
            deleteItem={()=>this.deleteItem(product._id)}
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
