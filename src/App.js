import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import Products from "./components/Products.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import DishList from "./components/DishList.jsx";
import StoreLocator from "./components/StoreLocator.jsx";
import Blogs from "./components/Blogs.jsx";
import Footer from "./components/Footer";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
import {SliderData} from "./components/SliderData";


const App = () => {
  const [loading, setLoading] = useState(false);

  const overide = css`
    display: block;
    text-align: center;
    border-color: red;
    margin-top: 20%;
  `;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <PropagateLoader
          color={"#3d2514"}
          loading={loading}
          css={overide}
          size={40}
        />
      ) : (
        <>
          <Navbar />
          <Header />
          <ImageSlider slides={SliderData} />
          <Products />
          <DishList />
          <StoreLocator />
          <Blogs />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
