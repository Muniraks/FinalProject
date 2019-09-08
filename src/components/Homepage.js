import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../components/styles/Homepage.css';

 class Homepage extends Component {
    render() {
        return (
            <div className="Home">
              
              <div className="left-home-div">
                    <h2 id="h2-one">Sell to the world, from your Couch.</h2>
                    <h2 id="h2-two">Independent sellers from everywhere are right here!</h2>
                   
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
                            src="https://static.zara.net/photos//mkt/spots/aw19-north-punk20-woman-basic/home-33//desktop-imaged.st.jpg?ts=1565625201884"
                        />
                    </Carousel.Item>
                </Carousel>
                </div>
                
            </div>
        )
    }
}

export default Homepage;
