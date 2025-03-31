import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import prod1 from "../../assets/Product/prd1.png";
import next_arrow from "../../assets/Icons/Home/next_arrow.svg";
import ProductCardWithCart from "./Product/ProductCardWithCart";
import Slider from "../Shared/Slider";

// Product data
const products = [
  { id: 1, name: "Buddha on Bodhi Leaves Lamp", price: 120.25, image: prod1 },
  { id: 2, name: "Buddha on Bodhi Leaves Lamp", price: 120.25, image: prod1 },
  { id: 3, name: "Buddha on Bodhi Leaves Lamp", price: 120.25, image: prod1 },
  { id: 4, name: "Buddha on Bodhi Leaves Lamp", price: 120.25, image: prod1 },
  { id: 5, name: "Buddha on Bodhi Leaves Lamp", price: 120.25, image: prod1 },
];

const FeatureProduct = () => {
  return (
    <section className="relative w-full max-w-[1200px] px-horizontalSpacing">
      <SectionHeading
        heading="FEATURED PRODUCTS"
        subHeading="This week’s featured products are shown below"
      />
      <Slider
        children={Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="flex-shrink-0">
            <ProductCardWithCart
              title={`Hemp and Nettle Products`}
              subTitle={`Product ${index + 1}`}
              cardWidth="max-w-[180px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[240px]"
              buttonText="View Products"
              onClick={() => {
                navigate("/product-listing");
              }}
            />
          </div>
        ))}
      />
    </section>
  );
};

export default FeatureProduct;
