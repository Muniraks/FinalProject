import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import _ from 'lodash';

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'

import NewIn from './components/NewIn';
import Brands from './components/Brands';
import Products from './components/Products';
import Homepage from './components/Homepage';
import BrandProfile from './components/BrandProfile';
import Cart from './components/Cart';

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: null,
      alerts: [],
      products: [],
      cart:[],
    }
  }


  componentDidMount() {
    const dummyProduct = [
      {
        id: '1',
        type: 'shoes',
        size: 'S',
        brand: 'adidas',
        price:100,

      },
      {
        id: '2',
        type: 'shoes',
        size: 'L',
        brand: 'Nike',
        price:100,
      },
      {
        id: '3',
        type: 'NotShoes',
        size: 'M',
        brand: 'Converse',
        price:100,
      },
      {
        id: '4',
        type: 'NotShoes',
        size: 'M',
        brand: 'Converse',
        price:100,
      },
      {
        id: '5',
        type: 'NotShoes',
        size: 'M',
        brand: 'Converse',
        price:100,
      },
      {
        id: '6',
        type: 'NotShoes',
        size: 'M',
        brand: 'Converse',
        price:100,
      },
      {
        id: '7',
        type: 'NotShoes',
        size: 'M',
        brand: 'Converse',
        price:100,
      },
      {
        id: '8',
        type: 'NotShoes',
        size: 'M',
        brand: 'Converse',
        price:100,
      }
    ]

    this.setState({
      products: dummyProduct
    })

  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  //  

 addToCart = (id) => {
   const product = _.find(this.state.products, {id: id});
   console.log('found the product:', product)
    this.setState({cart: [...this.state.cart, product]});
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
          <Route path="/Home" component={Homepage} />
          <Route path="/NewIn" component={NewIn} />
          <Route path="/Brands" component={Brands} />
          <Route path="/Products" component={() => <Products products={this.state.products} addToCart={this.addToCart} />} />
          <Route path="/BrandProfile" component={() => <BrandProfile products={this.state.products} addToCart={this.addToCart} />} />
          <Route path="/Cart" component={Cart} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
