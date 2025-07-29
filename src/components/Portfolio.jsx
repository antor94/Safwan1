import React from 'react'
import CommonHead from './common/CommonHead'
import { HiMiniArrowRight } from "react-icons/hi2";
import black from '../assets/images/shape-black.png'

const Portfolio = () => {
  return (
    <>
    
          {/* ----------- portfolio */}

      <section id='portfolio' className=' relative'>
           <div className=" absolute top-[1200px] right-[85px]"><img src={black} alt="logo" /></div>
           <div className=" absolute top-[532px] left-[85px]"><img src={black} alt="logo" /></div>
        <div className="container">
          <div className="">
            <div className='flex justify-center'><CommonHead headp={"My Portfolio"} /> </div>
            <div className="text-center">
              <h2 className="text-[50px] font-medium font-main text-main">
                {" "}
                My Work Example
              </h2>
            </div>
            <div className="flex justify-center gap-[25px]">
              <button className=" w-[21px] text-[16px] font-normal font-main text-main hover:border-b-primary">
                All
              </button>
              <button className=" w-[66px] text-[16px] font-normal font-main text-main hover:border-b-primary">
                Branding
              </button>
              <button className=" w-[91px] text-[16px] font-normal font-main text-main hover:border-b-primary">
                Photography
              </button>
              <button className=" w-[56px] text-[16px] font-normal font-main text-main hover:border-b-primary">
                Fashion
              </button>
              <button className=" w-[56px] text-[16px] font-normal font-main text-main hover:border-b-primary">
                Product
              </button>
            </div>

            <div className="pt-[40px] pb-[120px] flex flex-wrap justify-around  ">
              <div className="w-[570px] h-[520px] ">
                                <div className='w-[70px] h-[70px] bg-white rounded-full absolute top-[28px] right-[36px]  justify-center flex items-center'><HiMiniArrowRight className='text-[20px]  text-primary' /></div>
                <img
                  className="w-full h-[420px] bg-[#C4C4C4] hover:bg-[#00413d90]"
                  src="#"
                  alt="img"
                />
                <div className="bg-[#00413D] h-[100px] py-[22px] px-[16px]">
                  <h2 className="text-[24px] font-semibold font-main text-white">
                    Motion Graphics
                  </h2>
                  <p className="text-[16px] font-normal font-jost text-white">
                    Website
                  </p>
                </div>
              </div>
              <div className=" relative  group-[]: w-[570px] h-[520px] ">
                <div className='w-[70px] h-[70px] bg-white rounded-full absolute top-[28px] right-[36px]  justify-center flex items-center'><HiMiniArrowRight className='text-[20px]  text-primary' /></div>
                <img
                  className="w-full h-[420px] hover:bg-[#00413d90] bg-[#C4C4C4]"
                  src="#"
                  alt="img"
                />
                <div className="bg-[#00413D] h-[100px] py-[22px] px-[16px]">
                  <h2 className="text-[24px] font-semibold font-main text-white">
                  E-Learning App
                  </h2>
                  <p className="text-[16px] font-normal font-jost text-white">
             IOS App
                  </p>
                </div>
              </div>

              <div className=" mt-[30px] w-[570px] h-[520px] ">
                                <div className='w-[70px] h-[70px] bg-white rounded-full absolute top-[28px] right-[36px]  justify-center flex items-center'><HiMiniArrowRight className='text-[20px]  text-primary' /></div>
                <img
                  className="w-full h-[420px] bg-[#C4C4C4] hover:bg-[#00413d90]"
                  src="#"
                  alt="img"
                />
                <div className="bg-[#00413D] h-[100px] py-[22px] px-[16px]">
                  <h2 className="text-[24px] font-semibold font-main text-white">
              Web Application
                  </h2>
                  <p className="text-[16px] font-normal font-jost text-white">
                   Desktop
                  </p>
                </div>
              </div>
              <div className="mt-[30px] w-[570px] h-[520px] ">
                                <div className='w-[70px] h-[70px] bg-white rounded-full absolute top-[28px] right-[36px]  justify-center flex items-center'><HiMiniArrowRight className='text-[20px]  text-primary' /></div>
                <img
                  className="w-full h-[420px] bg-[#C4C4C4] hover:bg-[#00413d90]"
                  src="#"
                  alt="img"
                />
                <div className="bg-[#00413D] h-[100px] py-[22px] px-[16px]">
                  <h2 className="text-[24px] font-semibold font-main text-white">
             Visual Design
                  </h2>
                  <p className="text-[16px] font-normal font-jost text-white">
                   Desktop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    
    
    
    </>
  )
}

export default Portfolio