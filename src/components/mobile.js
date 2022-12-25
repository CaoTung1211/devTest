import React, { useState } from "react";
import dow from "../img/gallery/top.png";
import top from "../img/gallery/top1.png";
import col1_1 from "../img/gallery/mobile/col1.1.png";
import col1_2 from "../img/gallery/mobile/col 1.2.png";
import col2 from "../img/gallery/mobile/col2.png";
import row2 from "../img/gallery/mobile/row2.png";
import row3 from "../img/gallery/mobile/row3.png";
import row4_1 from "../img/gallery/mobile/row4.col1.png";
import row4_2 from "../img/gallery/mobile/row4.col2.png";
const Mobile = ({ arrTabMobile, arrPen2, arrTab }) => {
  const [IsActive, setIsActive] = useState(true);
  console.log("🚀 ~ file: mobile.js:5 ~ Mobile ~ IsActive", IsActive);

  const handleToggle = () => {
    setIsActive(!IsActive);
  };

  return (
    <>
      <div className="xl:hidden max-w-[390px] mx-auto container bg-white px-[1px] box-border">
        <div
          className={`  bg-bgDefault  flex items-center mx-auto p-[10px_10px_30px_10px] ${
            IsActive === true
              ? "p-[10px_10px_30px_10px] rounded-[18px_18px_0px_0px] h-[120px]"
              : "p-[10px_10px_10px_10px] rounded-[18px_18px_18px_18px] h-[100px] mb-[10px]"
          }`}
        >
          <button
            onClick={handleToggle}
            className="flex  outline-none justify-between w-full items-center rounded-[18px] bg-white "
          >
            <div className="flex items-center gap-[20px] pl-[30px] pt-[13px]   pb-[17px]">
              <div className="w-[50px] h-[50px] rounded-full bg-bgDefault flex justify-center items-center">
                <img
                  src={arrTab[0].img}
                  alt=""
                  className="w-[27px] h-[27px]"
                ></img>
              </div>
              <p className="font-bold leading-8 text-[21px] text-textBlack whitespace-nowrap ">
                {arrTab[0].name}
              </p>
            </div>
            <div className="pr-[34px]">
              <img src={IsActive === true ? top : dow} alt=""></img>
            </div>
          </button>
        </div>
        <div
          className={`${
            IsActive === true ? "block " : "hidden"
          } transition-all duration-5000 ease-in-out`}
        >
          <div className=" h-[700px] pt-[11px] bg-bgDefault relative m-auto rounded-[0_0_25px_25px] mb-[10px] transition: all 0.5s ease-in-out">
            <p className="font-normal leading-[27px] text-[16px] ml-[31px] mr-[37px] h-[59px]">
              Graphite Artist Quality Fine Art Drawing, Sketching and
              Replaceable Nib Pencils.
            </p>
            <ul className="mt-[9px] font-semibold text-[13px] leading-8 list-disc grid grid-cols-2 ml-[40px]">
              <li>MECHANICAL PENCILS</li>
              <li>ARCHITECT'S CHOICE</li>
              <li>EXECUTIVE PENCILS</li>
              <li>ENGRAVABLE PENCILS</li>
            </ul>
            <div className="px-[30px] mt-[27px]">
              <div className="flex gap-[16px] h-[90px] rounded-[18px]  border-[3px] box-border  border-white  overflow-hidden">
                <div className="flex my-auto ml-[24px] h-fit">
                  <div className=" flex items-center text-textYellow font-bold ">
                    <p className=" text-[36px] leading-[54px]">25%</p>
                  </div>
                  <div className=" flex mt-2 text-textYellow font-bold ">
                    <span className="uppercase text-[18px] leading-[27px]">
                      off
                    </span>
                  </div>
                </div>

                <div className=" my-auto font-normal leading-[24px] text-[16px]">
                  Offer Applicable on All Our Pencils
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[18px] mt-[40px] px-[20px] h-[260px] text-center">
              {arrPen2.map((item, index) => (
                <div
                  className="flex flex-col justify-center items-center bg-white rounded-[18px]"
                  key={index}
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-[135px] h-[160px]"
                  ></img>
                  <p className="font-medium text-sm leading-[21px] style_cad px-2">
                    {item.name}
                  </p>
                  <div className="flex gap-[11px] mt-[7px]">
                    <span className="font-semibold leading-[24px] text-base ">
                      ${item.price.new}
                    </span>
                    <span className="line-through text-textThrough font-normal leading-[21px] text-[14px]">
                      ${item.price.old}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-textYellow text-white  mt-[40px] mb-[60px] mx-auto block  w-[100px] h-[40px] rounded-[5px] outline-none">
              <p className="whitespace-nowrap font-bold text-sm leading-10">
                SHOP ALL
              </p>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          {arrTabMobile.map((item, index) => (
            <div
              className=" w-full h-[100px] bg-bgDefault rounded-[18px_18px_18px_18px] flex items-center mx-auto p-[10px_10px_10px_10px] "
              key={index}
            >
              <button className="flex  outline-none justify-between w-full items-center rounded-[18px] bg-white ">
                <div className="flex items-center gap-[20px] pl-[30px] pt-[13px]   pb-[17px]">
                  <div className="w-[50px] h-[50px] rounded-full bg-bgDefault flex justify-center items-center">
                    <img
                      src={item.img}
                      alt=""
                      className="w-[27px] h-[27px]"
                    ></img>
                  </div>
                  <p className="font-bold leading-8 text-[21px] text-textBlack whitespace-nowrap ">
                    {item.name}
                  </p>
                </div>
                <div className="pr-[34px]">
                  <img src={dow} alt=""></img>
                </div>
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-[15px] mt-[30px] mx-auto justify-center items-center">
          <div className="w-[15px] h-[15px] bg-black rounded-full"></div>
          <div className="w-[15px] h-[15px] bg-[#333333] opacity-25 rounded-full"></div>
        </div>
        <div className="mt-[60px]">
          <h2 className="uppercase font-bold text-[30px] leading-[45px] text-center mb-[33.93px]">
            Packer pen Gallery
          </h2>
          <div className="flex flex-col gap-[9.51px]">
            <div className="flex gap-[9.51px] justify-center items-center ">
              <div className="flex flex-col  justify-center items-center gap-[9.51px] box-border">
                <div>
                  <img className="object-fill" src={col1_1} alt=""></img>
                </div>
                <div>
                  <img className="object-fill" src={col1_2} alt=""></img>
                </div>
              </div>
              <div>
                <img className="object-fill" src={col2} alt=""></img>
              </div>
            </div>
            <div className="">
              <img src={row2} alt=""></img>
            </div>
            <div className="">
              <img src={row3} alt=""></img>
            </div>
            <div className="flex gap-[9.51px] ">
              <div className="">
                <img src={row4_1} alt=""></img>
              </div>
              <div className="">
                <img src={row4_2} alt=""></img>
              </div>
            </div>
          </div>
          <div className="flex gap-[15px] mt-[30px] pb-[32px] mx-auto justify-center items-center">
            <div className="w-[15px] h-[15px] bg-[#333333] opacity-25 rounded-full"></div>
            <div className="w-[15px] h-[15px] bg-black rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
