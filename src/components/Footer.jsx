import React from "react";
import logo from "../assets/images/footer-logo.png";
import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineSkype } from "react-icons/ai";
import { FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="bg-main pt-[80px] pb-[30px]">
        <div className="container">
          <div className="">
        
              <div className="flex justify-center"><img src={logo} alt="footer_img" /> </div>
              <div className="pt-[60px] flex justify-center">
                <ul className="flex gap-[43px] items-center">
                  <li className="text-[18px] font-normal font-jost text-white">
                    <Link  to='/Home'>Home</Link>
                  </li>
                  <span className=" inline-block w-[2px] h-[26px] bg-[#ffffff21]"></span>
                  <li className="text-[18px] font-normal font-jost text-white">
                    <Link to='/'>Pages</Link>
                  </li>
                  <span className=" inline-block w-[2px] h-[26px] bg-[#ffffff21]"></span>
                  <li className="text-[18px] font-normal font-jost text-white">
                    <Link to='/Se'>Services</Link>
                  </li>
                  <span className=" inline-block w-[2px] h-[26px] bg-[#ffffff21]"></span>
                  <li className="text-[18px] font-normal font-jost text-white">
                    <Link to='/'>Blog</Link>
                  </li>
                  <span className=" inline-block w-[2px] h-[26px] bg-[#ffffff21]"></span>
                  <li className="text-[18px] font-normal font-jost text-white">
                    <Link to='/'>Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="pt-[50px] pb-[80px] flex justify-center gap-[20px]">
                <div className="!w-[60px] h-[60px] rounded-full flex justify-center items-center bg-[#E5745D]">
                  <Link to='/' className=""><AiOutlineSkype className="text-[36px] text-[#fff]" /></Link>{" "}
                </div>
                <div className="!w-[60px] h-[60px] rounded-full flex justify-center items-center bg-[#E5745D]">
                  <Link to='/' className=""><FaInstagram className="text-[36px] text-[#fff]" /></Link>{" "}
                </div>
                <div className="!w-[60px] h-[60px] rounded-full flex justify-center items-center bg-[#E5745D]">
                  <Link to='/' className=""><FaBehance className="text-[36px] text-[#fff]" /></Link>{" "}
                </div>
              </div>
          
          </div>
             
        </div>
      </section>
    </>
  );
};

export default Footer;
