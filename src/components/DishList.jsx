import React from 'react';
import DishListProducts from './DishListProducts';
import img1 from "../images/bug1.jpg";
import img2 from "../images/bug2.jpg";
import img3 from "../images/bug3.jpg";

const DishList = () => {
    return (
      <div id="dishList">
        <h1>Choose DishList</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          incidunt, voluptatum error qui ex quod explicabo ipsum
        </p>
        <div className="a-container">
          <DishListProducts
            image={img1}
            title={"Burger"}
            mintitle={"The perfect Diet Food"}
          />
          <DishListProducts
            image={img2}
            title={"Burger"}
            mintitle={"The perfect Diet Food"}
          />
          <DishListProducts
            image={img3}
            title={"Burger"}
            mintitle={"The perfect Diet Food"}
          />
        </div>
        <button className="productbox-button">View All</button>
      </div>
    );
}

export default DishList
