import React from 'react'
import CommonHead from './common/CommonHead'
import ProgressBar from "@ramonak/react-progress-bar";
import line from '../assets/images/line_shape.png'


const About = () => {
  return (
    <>
    
          {/* ---------- about */}
      <section id='about' className="py-[120px]">
        <div className="container">
          <div>
            <div className="flex justify-around">
              {/* ------------ design layout */}
              <div className="flex gap-[30px]">
                <div className="w-[370px] h-[480px] bg-[#C4C4C4]"></div>
                <div className="">
                  <div className="w-[170px] mb-[30px] h-[225px] bg-[#C4C4C4]"></div>
                  <div className="w-[170px] h-[225px] bg-[#C4C4C4]"></div>
                </div>
              </div>

              {/* --------------- about */}
              <div>
                <CommonHead headp={"About Me"} />
                <div className="pt-[11px] pb-[4px]">
                  <h2 className="w-[570px] h-[112px] leading-[56px] text-[50px] font-medium font-main text-main">
                    I Enjoy Solving Problems With Scalable Solutions
                  </h2>
                </div>
                <div className="w-[570px] h-[156px] mb-[50px]  leading-[26px]">
                  <p className=" text-[16px] font-normal font-jost text-main">
                    Quisruam est, qui dolorem ipsum quia dolor sit amet,
                    consecteaur aeci velit, sed quia non numquam eius modi
                    tempora incidunt lao magnam aliquam quaerat voluptatem
                    reprehenderit.
                  </p>
                  <p className="pt-[30px] text-[16px] font-normal font-jost text-main">
                    Modi tempora incidunt ut lao magnam aliquam quaerat
                    voluptatem reprehenderit non numquam eius.
                  </p>
                </div>
                <div className="w-[179px] h-[64px] bg-[#E5745D]"> <button className="w-[169px] h-[54px] m-1  border text-[18px] font-medium font-jost text-[#fff]  border-[#fff]"> Download CV</button></div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </section>

      <section className=" relative pb-[120px]">
          <div className=" absolute top-[-718px] right-[75px]"><img src={line} alt="logo" /></div>
  <div className="container">
    <div className="flex justify-around">


      <div className="w-[270px] h-[282px] bg-[#fff] shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)]">
        <ProgressBar completed={60} />

        <div><h2 className="text-[26px] text-center font-semibold font-main text-main">Graphic Design</h2></div>
      </div>
            <div className="w-[270px] h-[282px] bg-[#fff] shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)]">

        <div><h2 className="text-[26px] text-center font-semibold font-main text-main">Web Designing</h2></div>
      </div>
            <div className="w-[270px] h-[282px] bg-[#fff] shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)]">

        <div><h2 className="text-[26px] text-center font-semibold font-main text-main">Brand Design</h2></div>
      </div>
            <div className="w-[270px] h-[282px] text-center bg-[#fff] shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)]">

        <div><h2 className="text-[26px] text-center font-semibold font-main text-main">Web Development</h2></div>
      </div>




    </div>

    



  </div>
      </section>
    
    
    
    
    </>
  )
}

export default About