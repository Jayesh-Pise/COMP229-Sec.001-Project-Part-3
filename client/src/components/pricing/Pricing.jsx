import React from "react";
import PriceCard from "./PriceCard";
import "./price.css";

const Pricing = () => {
  return (
    <>
      <h1 className="pricing-title">Choose The Right Plan</h1>
      <section className="price padding">
        <div className="container grid">
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Pricing;