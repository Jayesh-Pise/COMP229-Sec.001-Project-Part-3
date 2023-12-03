import React from "react";
import { price } from "../../dummydata";
import { Link } from "react-router-dom";

const PriceCard = () => {
  return (
    <>
      {price.map((val, index) => (
        <div className='items shadow' key={index}>
          <h4>{val.name}</h4>
          <h1>
            <span>$</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <Link to="/signin">
            <button className='outline-btn'>GET STARTED</button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PriceCard;
