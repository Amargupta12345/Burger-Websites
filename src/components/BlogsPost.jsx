import React from "react";

const BlogsPost = (props) => {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} alt="loading " />
      </div>
      <div className="a-b-text">
        <h2>The Perfect Curry</h2>
        <div className="a-b-text">
          <h3>{props.title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, illum
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
            aperiam.
          </p>
          <h4>{props.newdate}</h4>
        </div>
      </div>
    </div>
  );
};

export default BlogsPost;
