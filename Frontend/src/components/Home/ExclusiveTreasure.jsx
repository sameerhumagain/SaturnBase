import React from "react";
import SectionHeading from "./SectionHeading";
import exclusive_corner_img from "../../assets/Icons/Home/handmade.png";
import prod1 from "../../assets/Product/prd1.png";
import ProductCardWithCart from "./Product/ProductCardWithCart";
import Slider from "../Shared/Slider";

const products = [
  { id: 1, name: "1Buddha on Bodhi Leaves Lamp", price: 120.25, image: prod1 },
  { id: 2, name: "2Buddha on Bodhi Leaves Lamp", price: 120.25, image: prod1 },
  { id: 3, name: "3Buddha on Bodhi Leaves Lamp", price: 120.25, image: prod1 },
  { id: 4, name: "4Buddha on Bodhi Leaves Lamp", price: 120.25, image: prod1 },
  { id: 5, name: "5Buddha on Bodhi Leaves Lamp", price: 120.25, image: prod1 },
];

const ExclusiveTreasure = () => {
  return (
    <section className="relative w-full max-w-[1200px] px-horizontalSpacing">
      <SectionHeading
        heading="EXCLUSIVE TREASURES - LIMITED TIME ONLY"
        subHeading="Discover our exclusive collection of one-of-a-kind products, crafted to perfection and available only for a limited time."
      />

      <div className="absolute top-10 right-4 hidden lg:block">
        <img
          src={exclusive_corner_img}
          className="max-w-[100px] animate-spin-slow"
          alt="Exclusive"
        />
      </div>
      <Slider
        children={Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="flex-shrink-0">
            <ProductCardWithCart/>
          </div>
        ))}
      />

    </section>
  );
};

export default ExclusiveTreasure;