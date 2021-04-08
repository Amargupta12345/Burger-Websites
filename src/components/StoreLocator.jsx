import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const StoreLocator = () => {
  const [text, setText] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (text === "") {
      alert("Please enter something!");
    } else {
      alert(text);
      setText("");
    }
  };

  const onChange = (evt) => setText(evt.target.value);

  return (
    <div id="storelocator">
      <hr />
      <h2>Store Locator</h2>
      <h3>Find variety of products near by you</h3>
      <form onSubmit={onSubmit} className="bg-gray-200 p-5">
        <input
          type="text"
          name="text"
          placeholder="Enter your city name or zip code"
          value={text}
          onChange={onChange}
        />

        <button type="submit" className="productbox-button">
        Find A Store
        </button>
      </form>
      <hr />
    </div>
  );
};

export default StoreLocator;
