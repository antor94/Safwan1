import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import CommonHead from "./common/CommonHead";
import { FaQuoteLeft } from "react-icons/fa";
import vector from '../assets/images/Vector.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import minus from '../assets/images/bxs_quote-right.png'

const Testimonals = () => {



  const settings = {
    className: "",
    dots: true,
    arrows:false,
    autoplay:true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true
  };


  return (
    <>
      {/* --------------- testimonals */}


  




      <section id="testimonals" className="bg-[#e5745d5c] relative">
              <div className=" absolute top-[439px] right-[85px]"><img src={minus} alt="logo" /></div>
              <div className=" absolute top-[100px] left-[85px]"><img src={minus} alt="logo" /></div>
        <div className="container">
          <div className="pt-[109px] text-center pb-[72px]">
            <div className="flex justify-center"> <CommonHead headp={"Client Testimonial"} /> </div>
            <div><h2 className="text-[50px] font-medium font-main text-main">Feedback From Client</h2></div>


<div className="flex justify-center">
</div>

              <div className="flex pt-[40px] gap-[30px] items-center">
 </div>
   <Slider {...settings}>
        <div>
            <div>
                  <div className="w-[570px] h-[138px] bg-[#fff]">
                    <div className="w-full h-[7px] bg-primary polygon(49% 0, 36% 23%, 70% 26%)"></div>
                    <div className="w-[476px] flex justify-start pt-[30px] pl-[40px]"><p className="text-[16px] font-normal font-jost text-main flex justify-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
typesetting industry.</p></div>
                    <img className="mt-[18px] ml-[76px]" src={vector} alt="vector-img" />
                  </div>
                  <div className="flex mt-[40px] ml-[55px] gap-[30px] items-center">
                    <div className="w-[74px] h-[74px] border border-primary rounded-full">
                      <div className="w-[64px] h-[64px] bg-[#D9D9D9] rounded-full m-[5px]"></div>
                      <div className="w-[28px] h-[28px] flex justify-center mt-[-18px] ml-[20px] items-center bg-primary rounded-full">
                        <FaQuoteLeft className="text-[#fff] text-[16px]" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-[20px] font-semibold font-main text-main"> Michale Doie </h2>
                      <p className="text-[14px] flex justify-start font-normal font-jost text-main"> Product Designer </p>
                      <div className="flex items-center">
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStarHalf className="text-[#FF9F3F]" />
                      </div>
                    </div>
                  </div>
          </div>
        </div>
        <div>
       <div>
                  <div className="w-[570px] h-[138px] bg-[#fff]">
                    <div className="w-full h-[7px] bg-primary polygon(49% 0, 36% 23%, 70% 26%)"></div>
                    <div className="w-[476px] flex justify-start pt-[30px] pl-[40px]"><p className="text-[16px] font-normal font-jost text-main flex justify-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
typesetting industry.</p></div>
                    <img className="mt-[18px] ml-[76px]" src={vector} alt="vector-img" />
                  </div>
                  <div className="flex mt-[40px] ml-[55px] gap-[30px] items-center">
                    <div className="w-[74px] h-[74px] border border-primary rounded-full">
                      <div className="w-[64px] h-[64px] bg-[#D9D9D9] rounded-full m-[5px]"></div>
                      <div className="w-[28px] h-[28px] flex justify-center mt-[-18px] ml-[20px] items-center bg-primary rounded-full">
                        <FaQuoteLeft className="text-[#fff] text-[16px]" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-[20px] font-semibold font-main text-main"> Adam Smith </h2>
                      <p className="text-[14px] flex justify-start font-normal font-jost text-main"> Designer </p>
                      <div className="flex items-center">
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStarHalf className="text-[#FF9F3F]" />
                      </div>
                    </div>
                  </div>
                </div>
        </div>
        <div>

        <div>
                  <div className="w-[570px] h-[138px] bg-[#fff]">
                    <div className="w-full h-[7px] bg-primary polygon(49% 0, 36% 23%, 70% 26%)"></div>
                    <div className="w-[476px] flex justify-start pt-[30px] pl-[40px]"><p className="text-[16px] font-normal font-jost text-main flex justify-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
typesetting industry.</p></div>
                    <img className="mt-[18px] ml-[76px]" src={vector} alt="vector-img" />
                  </div>
                  <div className="flex mt-[40px] ml-[55px] gap-[30px] items-center">
                    <div className="w-[74px] h-[74px] border border-primary rounded-full">
                      <div className="w-[64px] h-[64px] bg-[#D9D9D9] rounded-full m-[5px]"></div>
                      <div className="w-[28px] h-[28px] flex justify-center mt-[-18px] ml-[20px] items-center bg-primary rounded-full">
                        <FaQuoteLeft className="text-[#fff] text-[16px]" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-[20px] font-semibold font-main text-main"> Michale Doie </h2>
                      <p className="text-[14px] flex justify-start font-normal font-jost text-main"> Product Designer </p>
                      <div className="flex items-center">
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStarHalf className="text-[#FF9F3F]" />
                      </div>
                    </div>
                  </div>
                </div>





        </div>

      </Slider>



{/* ------------ 1st div */}
                {/* <div>
                  <div className="w-[570px] h-[138px] bg-[#fff]">
                    <div className="w-full h-[7px] bg-primary polygon(49% 0, 36% 23%, 70% 26%)"></div>
                    <div className="w-[476px] flex justify-start pt-[30px] pl-[40px]"><p className="text-[16px] font-normal font-jost text-main flex justify-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
typesetting industry.</p></div>
                    <img className="mt-[18px] ml-[76px]" src={vector} alt="vector-img" />
                  </div>
                  <div className="flex mt-[40px] ml-[55px] gap-[30px] items-center">
                    <div className="w-[74px] h-[74px] border border-primary rounded-full">
                      <div className="w-[64px] h-[64px] bg-[#D9D9D9] rounded-full m-[5px]"></div>
                      <div className="w-[28px] h-[28px] flex justify-center mt-[-18px] ml-[20px] items-center bg-primary rounded-full">
                        <FaQuoteLeft className="text-[#fff] text-[16px]" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-[20px] font-semibold font-main text-main"> Michale Doie </h2>
                      <p className="text-[14px] flex justify-start font-normal font-jost text-main"> Product Designer </p>
                      <div className="flex items-center">
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStarHalf className="text-[#FF9F3F]" />
                      </div>
                    </div>
                  </div>
                </div> */}

{/* ------------ 2nd div */}
                 {/* <div>
                  <div className="w-[570px] h-[138px] bg-[#fff]">
                    <div className="w-full h-[7px] bg-primary polygon(49% 0, 36% 23%, 70% 26%)"></div>
                    <div className="w-[476px] flex justify-start pt-[30px] pl-[40px]"><p className="text-[16px] font-normal font-jost text-main flex justify-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
typesetting industry.</p></div>
                    <img className="mt-[18px] ml-[76px]" src={vector} alt="vector-img" />
                  </div>
                  <div className="flex mt-[40px] ml-[55px] gap-[30px] items-center">
                    <div className="w-[74px] h-[74px] border border-primary rounded-full">
                      <div className="w-[64px] h-[64px] bg-[#D9D9D9] rounded-full m-[5px]"></div>
                      <div className="w-[28px] h-[28px] flex justify-center mt-[-18px] ml-[20px] items-center bg-primary rounded-full">
                        <FaQuoteLeft className="text-[#fff] text-[16px]" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-[20px] font-semibold font-main text-main"> Adam Smith </h2>
                      <p className="text-[14px] flex justify-start font-normal font-jost text-main"> Designer </p>
                      <div className="flex items-center">
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStar className="text-[#FF9F3F]" />
                        <FaStarHalf className="text-[#FF9F3F]" />
                      </div>
                    </div>
                  </div>
                </div>
              */}


          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonals;
