import React from "react";
import CommonHead from "./common/CommonHead";
import tag from "../assets/images/Tag Text.png";
import icon from "../assets/images/icon.png";
import { GoArrowRight } from "react-icons/go";
import logo from '../assets/images/bulet_shape.png'

import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const Services = () => {
  return (
    <>
      {/* ---------- service */}
      <section id="services" className="pt-[250px] relative pb-[120px]">
        <div className=" absolute top-[400px] left-[24px]"><img src={logo} alt="logo" /></div>
        <div className="container">
              <div className="flex justify-center"> <CommonHead headimg={tag} headp={"MY SERVICES"} /> </div>
          <div id="service-row" className=" text-center flex flex-col justify-center ">
            {/* --------- heading */}
            <div className="flex flex-col justify-center items-center"><h2 className="w-[570px] pt-[11px] pb-[40px]  text-[50px] font-medium font-main text-main">   Provide Wide Range of Digital Services   </h2>  </div>
           
           {/* --------- cart details  */}
            <div className="flex  justify-center gap-[30px] items-center">
              <div className="w-[370px] h-[364px] group pt-[55px] pb-[45px] px-[34px] bg-[#fff] hover:shadow-[5px_5px_15px_-3px_rgba(0,_0,_0,_0.15)] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]">
                <img src={icon} alt="icon" />
                <h2 className="text-[24px] font-extrabold font-main flex text-main pt-[26px]"> Ui/Ux Design </h2>
                <div className="w-[245px] flex justify-end">

                <p className=" text-[16px] font-normal font-jost text-main pt-[15px] pb-[30px]">Dolor repellendus tempo ribus aue
                quibusdam offi ciis debitis rerum na
                aibus minima veniam. </p>
                </div>
                <GoArrowRight className="text-[28px] text-main group-hover:text-[#E5745D]" />
              </div>
                  <div className="w-[370px] h-[364px] group pt-[55px] pb-[45px] px-[34px] bg-[#fff] hover:shadow-[5px_5px_15px_-3px_rgba(0,_0,_0,_0.15)] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]">
                <img src={icon} alt="icon" />
                <h2 className="text-[24px] font-extrabold font-main flex text-main pt-[26px]"> Ui/Ux Design </h2>
                <div className="w-[245px] flex justify-end">

                <p className=" text-[16px] font-normal font-jost text-main pt-[15px] pb-[30px]">Dolor repellendus tempo ribus aue
                quibusdam offi ciis debitis rerum na
                aibus minima veniam. </p>
                </div>
                <GoArrowRight className="text-[28px] text-main group-hover:text-[#E5745D]" />
              </div>
                  <div className="w-[370px] h-[364px] group pt-[55px] pb-[45px] px-[34px] bg-[#fff] hover:shadow-[5px_5px_15px_-3px_rgba(0,_0,_0,_0.15)] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]">
                <img src={icon} alt="icon" />
                <h2 className="text-[24px] font-extrabold font-main flex text-main pt-[26px]"> Ui/Ux Design </h2>
                <div className="w-[245px] flex justify-end">

                <p className=" text-[16px] font-normal font-jost text-main pt-[15px] pb-[30px]">Dolor repellendus tempo ribus aue
                quibusdam offi ciis debitis rerum na
                aibus minima veniam. </p>
                </div>
                <GoArrowRight className="text-[28px] text-main group-hover:text-[#E5745D]" />
              </div>
            </div>
          </div>
        </div>
      </section>























    </>
  );
};

export default Services;
