import React from 'react'
import BlogsPost from "./BlogsPost";
import img1 from "../images/bug1.jpg";
import img2 from "../images/bug2.jpg";
import img3 from "../images/bug3.jpg";

const Blogs = () => {
    return (
      <div id="blogs">
        <h1>Blogs</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          incidunt, voluptatum error qui ex quod explicabo ipsum
        </p>
        <div className="a-container">
          <BlogsPost
            image={img1}
            tittle={"luger burger"}
            newdate={new Date().toLocaleDateString()}
          />
          <BlogsPost
            image={img2}
            tittle={"luger burger"}
            newdate={new Date().toLocaleDateString()}
          />
          <BlogsPost
            image={img3}
            tittle={"luger burger"}
            newdate={new Date().toLocaleDateString()}
          />
        </div>
        <button className="productbox-button">View All</button>
      </div>
    );
}

export default Blogs
