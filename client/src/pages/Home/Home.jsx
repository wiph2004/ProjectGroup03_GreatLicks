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
      <div className="carousel">
            <Carousel>
                <div>
                    <img src="../images/dessert-delicious-ice-cream-table.jpg" />
                </div>
                <div>
                    <img src="../images/crop-hands-putting-ice-cream-cone.jpg" />
                </div>
                <div>
                    <img src="../images/woman-having-fun-food-festival.jpg" />
                </div>
            </Carousel>
          </div>
    </div>
  );
};

export default Home;
