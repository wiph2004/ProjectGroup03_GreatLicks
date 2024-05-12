import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Home.css';
import Cart from "../../components/Cart";
import Shop from "../Shop/Shop";

const Home = () => {
  return (
    <div className="container">
      <Cart />
      <div id="scroll-container">
        <div id="scroll-text">
          Try our new strawberry ice cream sandwich on graham cracker cookies!
        </div>
      </div>
            <Carousel width="80%" infiniteLoop="true" showThumbs={false}>
                <div>
                    <img src="../images/welcome.png" />
                </div>
                <div>
                    <img src="../images/scoop.png" />
                </div>
                <div>
                    <img src="../images/smile.png" />
                </div>
            </Carousel>
          </div>
  );
};

export default Home;
