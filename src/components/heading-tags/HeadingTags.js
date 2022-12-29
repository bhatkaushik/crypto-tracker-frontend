import React from "react";
import "./headingTags.css";
const HeadingTags = () => {
  return (
    <div className="headingTags d-flex flex-column">
      <h3>Top 100 Cryptocurrencies by Market Cap</h3>
      <div className="tag-wrapper d-flex ">
        <div className="tags">
          {/* add star icon here */}
          <p> Favourites</p>
        </div>
        <div className="tags">
          <p>CryptoCurrencies</p>
        </div>
        <div className="tags">
          <p>Defi</p>
        </div>
        <div className="tags">
          <p> NFTs & Collectibles</p>
        </div>
      </div>
    </div>
  );
};

export default HeadingTags;
