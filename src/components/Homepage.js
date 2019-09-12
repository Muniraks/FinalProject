import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../components/styles/Homepage.css';
import { Link } from 'react-router-dom';


 class Homepage extends Component {
    render() {
        return (
            <div className="Home">
              
              <div className="left-home-div">
                <h2>Sell to the world, from your Couch. <br/>
                Independent sellers from everywhere are right here! </h2>
    
               <button> <Link className="sell-form-btn" to="/newProduct">Sell Your Product!</Link></button>
               
                </div>
                

                <div className="right-home-div">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="Home-slideshow"
                            src="adidas.jpeg"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="Home-slideshow"
                            src="nike.jpeg"
                        />
                    </Carousel.Item>
                </Carousel>
                </div>
                
            </div>
        )
    }
}

export default Homepage;
