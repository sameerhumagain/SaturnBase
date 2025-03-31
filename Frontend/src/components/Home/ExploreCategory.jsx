import React from "react";
import SectionHeading from "./SectionHeading";
import ExploreCategoryCard1 from "./Product/ExploreCategoryCard";
import ExploreCategoryCard from "./Product/ExploreCategoryCard";
import { useNavigate } from "react-router-dom";

const ExploreCategory = () => {
  const navigate = useNavigate();

  const handleExploreCategory = ()=>{
    navigate('/category-product-listing/1/')
  }
  
  return (
    <div className="w-full bg-[#edf1ed] rounded pb-section px-horizontalSpacing">
      <SectionHeading
        heading="EXPLORE MORE CATEGORIES"
        subHeading="This week’s featured products are shown below."
      />

      <div className="max-w-[1332px] mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-cardGap   lg:px-0">
          {Array(8).fill().map((_, index) => (
            <ExploreCategoryCard
              key={index}
              title="Hemp and Needle Products"
              subTitle="Buddha on Bodhi leaves Lamp"
              onClick={handleExploreCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCategory;
