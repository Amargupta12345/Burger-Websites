import React from "react";
import Productbox from "./Productsbox";
import pimage1 from '../images/s1.png'
import pimage2 from '../images/s2.png'

const Products = () => {
  return (
    <div id="products">
      <h1>Choose & Enjoy</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum incidunt,
        voluptatum error qui ex quod explicabo ipsum
      </p>
      <div className="a-container">
        <Productbox image={pimage1} tittle={"luger burger"} />
        <Productbox image={pimage2} tittle={"luger burger"} />
        <Productbox image={pimage1} tittle={"luger burger"} />
        <Productbox image={pimage2} tittle={"luger burger"} />
        
       
      </div>
    </div>
  );
};

export default Products;
