import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import _ from 'lodash';
import axios from 'axios';

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'

import Brands from './components/Brands';
import Products from './components/Products';
import Homepage from './components/Homepage';
import BrandProfile from './components/BrandProfile';
import Cart from './components/Cart';
import Payment from './components/Payment';
import newProduct from './components/newProduct';
import UpdateProduct from './components/updateProduct';


class App extends Component {
  constructor() {
    super()

    this.state = {
      user: null,
      alerts: [],
      products: [],
      cart:[],
      brandId:null,
    }
  }


  componentDidMount() {
    const user = localStorage.getItem('user');
    console.log('const', user);
    


  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  //  

 addToCart = (id) => {
   const product = _.find(this.state.products, {_id: id});
   console.log('found the product:', product)
    this.setState({cart: [...this.state.cart, product]});
 }

 findProduct = (id) => {
  return _.find(this.state.products, {_id: id}) || false;
 }
 handleOnClickBrand(id) {
  this.setState({
     brandId: id
    })
}

handleDelete = (id) => {
  const product = _.find(this.state.products, {_id: id});
  const productsCopy = [...this.state.products];
  const indexOfProduct = productsCopy.indexOf(product);
  productsCopy.splice(indexOfProduct, 1);
  this.setState({ products: productsCopy });
}

updateProducts = () => {
  axios.get('http://localhost:3000/products')
  .then(res => {
    console.log(res.data.products)
    this.setState({
      products: res.data.products
    
  })
})
  .catch(err => {
    console.log(err)
  });
}

  render() {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <Route user={user} path='/products' render={() => (
            <Products user={user} products={this.state.products} updateProducts={this.updateProducts} handleDelete={this.handleDelete} addToCart={this.addToCart} />
          )} />
          
          <Route path="/Home" component={Homepage} />
          <Route path="/Brands" component={Brands} />
          <Route path="/BrandProfile/:id" render={(props) => <BrandProfile user={user} {...props} products={this.state.products} handleDelete={this.handleDelete} addToCart={this.addToCart} />} />
          <Route path="/Cart" component={() => <Cart cart={this.state.cart}/>} />
          <Route path="/Payment" component={Payment} />
          <Route path="/newProduct" component={newProduct} />
          <Route path="/updateProduct/:id" render={(props) => <UpdateProduct {...props} findProduct={this.findProduct} />} />
        </main>
      </React.Fragment>
    )
  }           
}

export default App
