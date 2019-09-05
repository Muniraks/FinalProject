import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Navbar.css';




export default class Navbar extends Component {
    render() {
        return (
            <div className="Nav-bar">
                  <Link className="Nav-bar-item" to="/Home">Home</Link>
                  <Link className="Nav-bar-item" to="/NewIn">NewIn</Link>
                  <Link className="Nav-bar-item" to="/Products">Products</Link>
                  <Link className="Nav-bar-item" to="/Brands">Brands</Link>
                  <Link className="Nav-bar-item" to="/BrandProfile">Brand Profile</Link>
                  
            </div>
        )
    }
}
