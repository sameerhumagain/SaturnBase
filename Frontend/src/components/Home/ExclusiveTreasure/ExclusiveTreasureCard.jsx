import React from "react";
import treasure1 from "../../../assets/Images/treasure1.png";
import save from "../../../assets/Icons/Home/save.png";
const ExclusiveTreasureCard = () => {
  return (
    <>
      <div
        className="relative max-w-[33%] w-full mt-8 border shadow-xs rounded-md overflow-hidden pb-2"
        style={{ color: "#FAF5F0" }}
      >
        <img
          src={treasure1}
          className=" h-[230px] w-full object-cover rounded-sm
            "
        ></img>
        <div className="p-2">
          <div className="flex justify-between items-center gap-2">
            <div>
              <p
                className="font-normal text-[9px]"
                style={{ color: "#444444" }}
              >
                BEST OF CREATION NEPAL
              </p>
              <p
                className="font-medium text-sm mt-1"
                style={{ color: "#444444" }}
              >
                Woolen Rugs By Creation
              </p>
            </div>
            <div>
              <p style={{ color: "#777777" }}>$120.25</p>
            </div>
          </div>

          <p className="text-[9px] text-red-500 text-center mt-[8px]">
            RUNNING LOW : ONLY 3 LEFT 🏃‍♂️{" "}
          </p>
        </div>
        <div className="absolute top-1 right-2 bg-white p-[6px] py-2 rounded">
          <img src={save} className="h-4"></img>
        </div>
      </div>
    </>
  );
};

export default ExclusiveTreasureCard;
