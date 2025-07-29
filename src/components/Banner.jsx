import React from 'react'
import bannerimg from '../assets/images/banner-img.png'

const Banner = () => {
  return (
    <>
    

    <section id='banner' style={{ background: `URL(${bannerimg})`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, }} className='pb-[220px] h-[850px]'>
      <div className="container">
        <div>
      <div className=' py-[221px] pl-[189px]'>
        <h1 className='w-[834px] h-[220px] text-[100px] font-bold font-main text-[#fff] flex flex-col leading-[110%]'>Hello! <span>I’m Zarror Nibors</span></h1> 
 <p className='w-[671px] text-[20px] font-normal font-jost text-[#fff7] pt-[14px] pb-[50px]'>I’am freelance <span className='text-[#fff]'>UI/UX Desogner</span>  based in Indonesia who loves to craft attractive design experiences for the web.</p>    
      
         <div className='w-[179px] h-[64px] bg-[#E5745D]'>
                   <button className='w-[169px] h-[54px] m-1  border text-[18px] font-medium font-jost text-[#fff]  border-[#fff]'>Contact Me</button>
               </div>
             
      
      </div>
        </div>
      </div>
    </section>




    </>
  )
}

export default Banner





 