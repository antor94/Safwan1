import React from 'react'
import CommonHead from './common/CommonHead'
import ProgressBar from "@ramonak/react-progress-bar";
import line from '../assets/images/line_shape.png'
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  { title: "Graphic Design", percentage: 70 },
  { title: "Web Designing", percentage: 85 },
  { title: "Brand Design", percentage: 60 },
  { title: "Web Development", percentage: 40 },
];
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


        <div style={{
      display: "flex",
      gap: "30px",
      justifyContent: "center",
      alignItems: "center",
    }}>
      {skills.map((skill, index) => (
        <div
          key={index}
          style={{
            width: "270px",
            height: "282px",
            textAlign: "center",
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(0,0,0,0.05)"
          }}
        >
          <CircularProgressbar
            value={skill.percentage}
            text={`${skill.percentage}%`}
            styles={buildStyles({
              textColor: "#e45b42",
              pathColor: "#e45b42",
              trailColor: "#e6e6e6",
              textSize: "16px",
              pathTransitionDuration: 1
            })}
          />
          <p style={{
            marginTop: "15px",
            fontWeight: "600",
            color: "#00413D",
            fontSize: "26px"
          }}>
            {skill.title}
          </p>
        </div>
      ))}
    </div>

{/* 
      <div className="w-[270px] h-[282px] bg-[#fff] shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)]">
        

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
      </div> */}




    </div>

    



  </div>
      </section>
    
    
    
    
    </>
  )
}

export default About