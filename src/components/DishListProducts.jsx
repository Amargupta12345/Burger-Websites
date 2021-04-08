import React from 'react'


const DishListProducts = (props) => {
    return (
      <div className="a-box" style={{ height: "400px" }}>
        <div className="a-b-img">
          <img className="new-a" src={props.image} alt="loading " />
        </div>
        <div className="a-b-text">
          <h3>{props.mintitle}</h3>
          <div className="a-b-text">
            <h4>{props.title}</h4>
          </div>
        </div>
      </div>
    );
}

export default DishListProducts
