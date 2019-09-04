import React from 'react'
import { Link } from 'react-router-dom'
// import { Route } from 'react-router-dom'

import './Header.scss'
import Navbar from '../components/Navbar';

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
   
  </React.Fragment>
)

const Header = ({ user }) => (
  <div>

    <header className="main-header">
      <h1>STORE</h1>
      <nav>
        {user && <span>Welcome, {user.email}</span>}
        {user ? authenticatedOptions : unauthenticatedOptions}
        {alwaysOptions}
      </nav>
    </header>

    <div>
      <Navbar />
    </div>

  </div>
)

export default Header
