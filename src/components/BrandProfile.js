import React, { Component } from 'react';
import '../components/styles/BrandProfile.css';

import ItemCard from './ItemCard';


export class BrandProfile extends Component {
    render() {
        return (
            <div className="brand-profile">
                
                <div className="brand-header">
                <img className="brand-profile-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png"></img>
                {/* <h1>Adidas</h1> */}
                </div>

                <div>

               <ItemCard/>
        
                </div>












                
            </div>
        )
    }
}

export default BrandProfile;
