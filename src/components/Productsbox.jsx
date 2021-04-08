import React from "react";

const Productsbox = (props) => {
  return (
    <div className="a-box" style={{height: '400px'}}>
      <div className="a-b-img">
        <img src={props.image} alt="loading " />
      </div>
      <div className="a-b-text">
        <h2>{props.title}</h2>
        <button className="productbox-button">Order Now</button>
       
      </div>
    </div>
  );
};

export default Productsbox;
