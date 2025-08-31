import React from 'react'
import CommonHead from './common/CommonHead'
import { GoArrowRight } from 'react-icons/go'
import plus from '../assets/images/plus.png'

import "slick-carousel/slick/slick.css";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";


import Slider from "react-slick";

const Project = () => {

  var settings = {
    dots: false,
    arrows:true,
    autoplay: false,
    autoplaySpeed:1000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
        nextArrow: <FiArrowRight />,
    prevArrow: <FiArrowLeft />
  };


  return (
    <>

          {/* ------------- project */}

      <section id='project' className=" relative pb-[120px]">
           <div className=" absolute top-[293px] right-[32px]"><img src={plus} alt="logo" /></div>
        <div className="container">
          <div>
            <div>
              <CommonHead headp={"Recent Projects"} />
              <h2 className="text-[50px] font-medium font-main text-main">
                My Recent Projects
              </h2>
            </div>
            <div className="flex justify-around items-center pt-[40px]">
            </div>

        <Slider {...settings}>
      <div>
             <div className="w-[370px] z-999 h-[520px] bg-white hover:shadow-[inset_0px_5px_15px_-3px_rgba(0,_0,_0,_0.2)] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]">
                <img
                  className="w-full h-[270px] bg-[#C4C4C4]"
                  src="$"
                  alt="img"
                />
                <div className="px-[30px] pt-[30px]">
                  <p className="text-[16px] font-medium font-main text-primary">
                    Analytics, UI-Ux
                  </p>
                  <h2 className="text-[24px] py-[10px] font-medium font-main text-main">
                    Branding & Digital Video Campaign For George’s Cafe
                  </h2>
                  <p className="w-[289px] text-[16px] font-normal font-jost text-main">
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And
                    Typesetting Industry.
                  </p>
                  <button className="text-[18px] pt-[24px] font-medium font-jost text-main hover:text-primary flex gap-[15px] items-center">
                    View Case Studies <GoArrowRight />
                  </button>
                </div>
              </div>
      </div>
      <div>
                 <div className="w-[370px] z-10 h-[520px] hover:shadow-[inset_0px_5px_15px_-3px_rgba(0,_0,_0,_0.2)] bg-white shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]">
                <img
                  className="w-full h-[270px] bg-[#C4C4C4]"
                  src="$"
                  alt="img"
                />
                <div className="px-[30px] pt-[30px]">
                  <p className="text-[16px] font-medium font-main text-primary">
                    Analytics, UI-Ux
                  </p>
                  <h2 className="text-[24px] py-[10px] font-medium font-main text-main">
                    Branding & Digital Video Campaign For George’s Cafe
                  </h2>
                  <p className="w-[289px] text-[16px] font-normal font-jost text-main">
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And
                    Typesetting Industry.
                  </p>
                  <button className="text-[18px] pt-[24px] font-medium font-jost text-main hover:text-primary flex gap-[15px] items-center">
                    View Case Studies <GoArrowRight />
                  </button>
                </div>
              </div>
      </div>
      <div>
                  <div className="w-[370px] h-[520px] hover:shadow-[inset_0px_5px_15px_-3px_rgba(0,_0,_0,_0.2)] bg-white shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]">
                <img
                  className="w-full h-[270px] bg-[#C4C4C4]"
                  src="$"
                  alt="img"
                />
                <div className="px-[30px] pt-[30px]">
                  <p className="text-[16px] font-medium font-main text-primary">
                    Analytics, UI-Ux
                  </p>
                  <h2 className="text-[24px] py-[10px] font-medium font-main text-main">
                    Branding & Digital Video Campaign For George’s Cafe
                  </h2>
                  <p className="w-[289px] text-[16px] font-normal font-jost text-main">
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And
                    Typesetting Industry.
                  </p>
                  <button className="text-[18px] pt-[24px] font-medium font-jost text-main hover:text-primary flex gap-[15px] items-center">
                    View Case Studies <GoArrowRight />
                  </button>
                </div>
              </div>
      </div>

    </Slider>
    

{/* 
              <div className="w-[370px] h-[520px] bg-white shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]">
                <img
                  className="w-full h-[270px] bg-[#C4C4C4]"
                  src="$"
                  alt="img"
                />
                <div className="px-[30px] pt-[30px]">
                  <p className="text-[16px] font-medium font-main text-primary">
                    Analytics, UI-Ux
                  </p>
                  <h2 className="text-[24px] py-[10px] font-medium font-main text-main">
                    Branding & Digital Video Campaign For George’s Cafe
                  </h2>
                  <p className="w-[289px] text-[16px] font-normal font-jost text-main">
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And
                    Typesetting Industry.
                  </p>
                  <button className="text-[18px] pt-[24px] font-medium font-jost text-main hover:text-primary flex gap-[15px] items-center">
                    View Case Studies <GoArrowRight />
                  </button>
                </div>
              </div>



              <div className="w-[370px] h-[520px] bg-white shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]">
                <img
                  className="w-full h-[270px] bg-[#C4C4C4]"
                  src="$"
                  alt="img"
                />
                <div className="px-[30px] pt-[30px]">
                  <p className="text-[16px] font-medium font-main text-primary">
                    Analytics, UI-Ux
                  </p>
                  <h2 className="text-[24px] py-[10px] font-medium font-main text-main">
                    Branding & Digital Video Campaign For George’s Cafe
                  </h2>
                  <p className="w-[289px] text-[16px] font-normal font-jost text-main">
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And
                    Typesetting Industry.
                  </p>
                  <button className="text-[18px] pt-[24px] font-medium font-jost text-main hover:text-primary flex gap-[15px] items-center">
                    View Case Studies <GoArrowRight />
                  </button>
                </div>
              </div>



              <div className="w-[370px] h-[520px] bg-white shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]">
                <img
                  className="w-full h-[270px] bg-[#C4C4C4]"
                  src="$"
                  alt="img"
                />
                <div className="px-[30px] pt-[30px]">
                  <p className="text-[16px] font-medium font-main text-primary">
                    Analytics, UI-Ux
                  </p>
                  <h2 className="text-[24px] py-[10px] font-medium font-main text-main">
                    Branding & Digital Video Campaign For George’s Cafe
                  </h2>
                  <p className="w-[289px] text-[16px] font-normal font-jost text-main">
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And
                    Typesetting Industry.
                  </p>
                  <button className="text-[18px] pt-[24px] font-medium font-jost text-main hover:text-primary flex gap-[15px] items-center">
                    View Case Studies <GoArrowRight />
                  </button>
                </div>
              </div> */}






            <div className=" text-center flex justify-center">
              <div className="w-[179px] h-[64px] mt-[60px] flex justify-center bg-[#E5745D]">
                <button className="w-[169px] h-[54px] m-1 border text-[18px] font-medium font-jost text-[#fff]  border-[#fff]">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    
    
    
    </>
  )
}

export default Project