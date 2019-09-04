import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Homepage.css';

 class Homepage extends Component {
    render() {
        return (
            <div>
                <p>Hi, This is HOME PAGE </p>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="Home-slideshow"
                            src="https://rimage.gnst.jp/livejapan.com/public/img/common/noimage.jpg?20190630050037"
                            
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="Home-slideshow"
                            src="https://rimage.gnst.jp/livejapan.com/public/img/common/noimage.jpg?20190630050037"
                         
                        />
                    </Carousel.Item>
                   
                </Carousel>
                
            </div>
        )
    }
}

export default Homepage;
