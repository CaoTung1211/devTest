import "./App.css";
import Pencils from "./img/Vector.png";
import BlackPen from "./img/blackPen.png";
import RedckPen from "./img/redpen.png";
import Pencil from "./img/pencil.png";
import Markers from "./img/market.png";
import colorImg from "./img/colorimg.png";
import BookImg from "./img/Group.png";
import col1_1 from "./img/gallery/Rectangle 23.png";
import col1_2 from "./img/gallery/col1.2.png";
import col2_1 from "./img/gallery/col2.1.png";
import col2_2 from "./img/gallery/col2.2.png";
import col3_1 from "./img/gallery/col3.1.png";
import col3_2 from "./img/gallery/col3.2.png";
import col3_3 from "./img/gallery/col3.3.png";
import { useState } from "react";
import Mobile from "./components/mobile";

function App() {
  // const [state, setstate] = useState(initialState)
  const arrTab = [
    { id: 1, name: "Pencils", img: Pencils },
    { id: 2, name: "Markers", img: Markers },
    { id: 3, name: "Drawing Colors", img: colorImg },
    { id: 4, name: "Notebooks", img: BookImg },
  ];
  const arrTabMobile = [
    { id: 2, name: "Markers", img: Markers },
    { id: 3, name: "Drawing Colors", img: colorImg },
    { id: 4, name: "Notebooks", img: BookImg },
  ];

  const arrPen2 = [
    {
      img: BlackPen,
      name: "Aero Mechanical Pencil",
      price: {
        new: "99.00",
        old: "125.00",
      },
    },
    {
      img: RedckPen,
      name: "Castell Mechanical Pencil",
      price: {
        new: "75.00",
        old: "99.00",
      },
    },
  ];
  const arrPen = [
    {
      img: BlackPen,
      name: "Aero Mechanical Pencil",
      price: {
        new: "99.00",
        old: "125.00",
      },
    },
    {
      img: RedckPen,
      name: "Castell Mechanical Pencil",
      price: {
        new: "75.00",
        old: "99.00",
      },
    },
    {
      img: Pencil,
      name: "Architect Choice Pencil",
      price: {
        new: "45.00",
        old: "70.00",
      },
    },
  ];
  const [ID, setID] = useState(1);
  const handleClick = (id) => {
    setID(id);
  };

  return (
    <div className="App bg-[#F5F5F5]">
      <div className="max-w-[1440px] mx-auto h-full container hidden xl:block bg-white ">
        <div className="layout-container ">
          <div className="pt-[108px] ">
            <div className="grid grid-cols-4 grid-rows-1">
              {arrTab.map((item, index) => (
                <div
                  className={`p-[32px_31px_28px_34px] ${
                    item.id === ID ? "bg-bgDefault" : "bg-white"
                  } rounded-[25px_25px_0px_0px]`}
                  key={index}
                >
                  <button
                    onClick={() => handleClick(item.id)}
                    className="flex flex-col outline-none justify-center items-center gap-1 bg-white w-[235px] h-[140px] py-[23px] pl-[74px] pr-[83px] rounded-[10px]"
                  >
                    <div className="w-[58px] h-[58px] rounded-full bg-bgDefault flex justify-center items-center">
                      <img src={item.img} alt="" className="w-9 h-9"></img>
                    </div>
                    <p className="font-bold leading-8 text-[21px] text-textBlack whitespace-nowrap">
                      {item.name}
                    </p>
                  </button>
                </div>
              ))}
            </div>
            <div className="bg-bgDefault h-[500px] ] grid grid-cols-[400px_1fr] rounded-[0px_0px_25px_25px] ">
              <div className="mt-[51px] ">
                <p className="ml-[50px] font-normal leading-8 text-[21px]">
                  Graphite Artist Quality Fine Art Drawing and Sketching Pencils
                  Replaceable Nib Pencils.{" "}
                </p>
                <ul className="font-semibold text-lg leading-10 list-disc ml-[70px] mt-[20px] w-[222px] h-[160px]">
                  <li>MECHANICAL PENCILS</li>
                  <li>ARCHITECT'S CHOICE</li>
                  <li>EXECUTIVE PENCILS</li>
                  <li>ENGRAVABLE PENCILS</li>
                </ul>
                <button className="bg-textYellow text-white  mt-[35px] ml-[50px] w-[120px] h-[50px] rounded-[5px] outline-none">
                  <p className="w-[66px] h-[40px] my-[5px] ml-[29px] mr-[25px] whitespace-nowrap font-bold text-sm leading-10">
                    SHOP ALL
                  </p>
                </button>
              </div>

              <div className="py-[40px] pr-[50px] pl-[38px] ">
                <div className="grid grid-cols-[200px_1fr] justify-center items-center rounded-[18px]  border-[3px] box-border h-[80px] border-white  overflow-hidden">
                  <div className="bg-white pl-[40px]  py-[13px] font-bold text-4xl leading-[54px] text-textYellow ">
                    25% off
                  </div>
                  <div className=" pl-[24px] my-auto font-light leading-[38px] text-[25px]">
                    Offer Applicable on All Our Pencils
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-[20px] mt-[20px]">
                  {arrPen.map((item, index) => (
                    <div
                      className="flex flex-col justify-center items-center bg-white rounded-[18px] pt-[10px] pb-[34px]"
                      key={index}
                    >
                      <img src={item.img} alt="" className=""></img>
                      <p className="font-medium text-sm leading-[21px] mt-[14px]">
                        {item.name}
                      </p>
                      <div className="flex gap-[11px] mt-[7px]">
                        <span className="font-semibold leading-[24px] text-base">
                          ${item.price.new}
                        </span>
                        <span className="line-through text-textThrough font-normal leading-[21px] text-[14px]">
                          ${item.price.old}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-[15px] mt-[50px] mx-auto justify-center items-center">
              <div className="w-[15px] h-[15px] bg-black rounded-full"></div>
              <div className="w-[15px] h-[15px] bg-[#333333] opacity-25 rounded-full"></div>
            </div>
          </div>
          <div className="mt-[100px]">
            <h2 className="uppercase font-bold text-[45px] leading-[68px] text-center mb-[40px]">
              Packer pen Gallery
            </h2>
            <div className="grid grid-cols-[291px_1fr_291px] gap-[18px] items-center">
              <div className="flex flex-col gap-[18px]">
                <div>
                  <img src={col1_1} alt=""></img>
                </div>
                <div>
                  <img src={col1_2} alt=""></img>
                </div>
              </div>
              <div className="flex flex-col gap-[18px]">
                <div>
                  <img src={col2_1} alt=""></img>
                </div>
                <div>
                  <img src={col2_2} alt=""></img>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] ">
                <div>
                  <img src={col3_1} alt=""></img>
                </div>
                <div>
                  <img src={col3_2} alt=""></img>
                </div>
                <div>
                  <img src={col3_3} alt=""></img>
                </div>
              </div>
            </div>
            <div className="flex gap-[15px] mt-[50px] pb-[90px] mx-auto justify-center items-center">
              <div className="w-[15px] h-[15px] bg-[#333333] opacity-25 rounded-full"></div>
              <div className="w-[15px] h-[15px] bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <Mobile arrTabMobile={arrTabMobile} arrTab={arrTab} arrPen2={arrPen2} />
    </div>
  );
}

export default App;
