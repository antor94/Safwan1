import React from 'react'
import CommonHead from './common/CommonHead'
import { GoArrowRight } from "react-icons/go";

const Blog = () => {
  return (
    <>
    
    
    <section id='blog' className='py-[120px]'>
        <div className="container">
            <div>
                <div className='flex justify-center'><CommonHead headp={'Letest Blogs'} /></div>
                <div className='flex justify-center'><h2 className='text-[50px] font-medium font-main text-main'>Blog & Articles</h2></div>

                <div className='pt-[40px] flex justify-around items-center'>

                    <div className='w-[370px] h-[513px] shadow-[0px_15px_35px_-5px_rgba(0,_0,_0,_0.1)]'>
                        <div className='w-full h-[260px] bg-[#C4C4C4]'><img src="#" alt="blog-img" /></div>

                        <div className='px-[30px]'> 



                        <div className='flex justify-around pt-[20px]'>
                            <p>By David William</p>
                            <p>Mar 8, 2022</p>
                        </div> 
                        <div className='text-[24px] font-medium font-main text-main pt-[14px] pb-[11px]'><h2>Quis autem vea eum iure reprehenderit.</h2></div>
                        <div className='w-[335px]'><p className='text-[16px] font-normal font-jost text-main'>Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.</p></div>
                        <button className='text-[16px] font-medium font-jost text-main pt-[24px] flex gap-[15px] items-center hover:text-primary pb-[30px]'>Read More <GoArrowRight /></button>
                        </div>

                    </div>
                    <div className='w-[370px] h-[513px] shadow-[0px_15px_35px_-5px_rgba(0,_0,_0,_0.1)]'>
                        <div className='w-full h-[260px] bg-[#C4C4C4]'><img src="#" alt="blog-img" /></div>

                        <div className='px-[30px]'> 

                        <div className='flex justify-around pt-[20px]'>
                            <p>By David William</p>
                            <p>Mar 8, 2022</p>
                        </div> 
                        <div className='text-[24px] font-medium font-main text-main pt-[14px] pb-[11px]'><h2>Quis autem vea eum iure reprehenderit.</h2></div>
                        <div className='w-[335px]'><p className='text-[16px] font-normal font-jost text-main'>Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.</p></div>
                        <button className='text-[16px] font-medium font-jost text-main pt-[24px] flex gap-[15px] items-center hover:text-primary pb-[30px]'>Read More <GoArrowRight /></button>
                        </div>
                    </div>

                 <div className='w-[370px] h-[513px] shadow-[0px_15px_35px_-5px_rgba(0,_0,_0,_0.1)]'>
                        <div className='w-full h-[260px] bg-[#C4C4C4]'><img src="#" alt="blog-img" /></div>

                        <div className='px-[30px]'> 



                        <div className='flex justify-around pt-[20px]'>
                            <p>By David William</p>
                            <p>Mar 8, 2022</p>
                        </div> 
                        <div className='text-[24px] font-medium font-main text-main pt-[14px] pb-[11px]'><h2>Quis autem vea eum iure reprehenderit.</h2></div>
                        <div className='w-[335px]'><p className='text-[16px] font-normal font-jost text-main'>Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.</p></div>
                        <button className='text-[16px] font-medium font-jost text-main pt-[24px] flex gap-[15px] items-center hover:text-primary pb-[30px]'>Read More <GoArrowRight /></button>
                        </div>

                    </div>



                </div>



            </div>

        </div>

    </section>
    
    
    
    </>
  )
}

export default Blog