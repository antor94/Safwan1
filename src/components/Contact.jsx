import React from 'react'
import CommonHead from './common/CommonHead'
import bulet from '../assets/images/bulet.png'

const Contact = () => {
  return (
    <>
    
    
      {/* --------------- conatact */}

      <section is='contact' className=" relative py-[120px]">
        <div className=" absolute top-[160px] right-[24px]"><img src={bulet} alt="logo" /></div>
        <div className="container">
          <div className="flex gap-[150px] items-center">

            <div className="w-[470px] h-[586px] bg-[#C4C4C4]">

            </div>
            <div className="w-[670px] h-[480px]">
              <div><CommonHead headp={'Get In Touch'} /></div>
              <div><h2 className="text-[50px] font-medium font-main text-main">Feel Free to Contact</h2></div>
              <div className="pt-[40px] flex gap-[57px] flex-wrap justify-between">
                <input className="w-[300px] text-[18px] font-normal font-jost outline-none text-main border-b-2 pb-[12px]" type="text" placeholder="Enter Name" />
                <input className="w-[300px] text-[18px] font-normal font-jost outline-none text-main border-b-2 pb-[12px]" type="email" placeholder="Enter Email" />
                <input className="w-[300px] text-[18px] font-normal font-jost outline-none text-main border-b-2 pb-[12px]" type="number" placeholder="Phone" />
                <input className="w-[300px] text-[18px] font-normal font-jost outline-none text-main border-b-2 pb-[12px]" type="text" placeholder="Subject" />
                <input className="w-[670px] text-[18px] font-normal font-jost outline-none text-main border-b-2 pb-[12px]" type="text" placeholder="Subject" />
              </div>
            </div>
          </div>
                <div className="w-[179px] ml-[760px] mt-[-113px] h-[64px] bg-[#E5745D]"> <button className="w-[169px] h-[54px] m-1  border text-[18px] font-medium font-jost text-[#fff]  border-[#fff]"> Download CV</button></div>




        </div>

      </section>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Contact