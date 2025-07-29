import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>
    
    
    <section className='navbar'>
        <div className="container">
            <div className="py-[30px] flex justify-between items-center">
                <div>
                    <img className='w-[122px]' src={logo} alt="head_logo" />
                </div>
                <div>
                    <ul className='flex gap-[43px] items-center'>
                        <li className='text-[18px] font-normal font-jost text-main hover:text-[#E5745D]'><Link to='/'>Home</Link></li>
                        <li className='text-[18px] font-normal font-jost text-main hover:text-[#E5745D]'><Link to='/'>Pages</Link></li>
                        <li className='text-[18px] font-normal font-jost text-main hover:text-[#E5745D]'><Link to='/Services'>Services</Link></li>
                        <li className='text-[18px] font-normal font-jost text-main hover:text-[#E5745D]'><Link to='/Blog'>Blog</Link></li>
                        <li className='text-[18px] font-normal font-jost text-main hover:text-[#E5745D]'><Link to='/Contact'>Contact</Link></li>
                    
                    </ul>
                </div>
                <div className='w-[198px] h-[64px] bg-[#E5745D]'>
                    <button className='w-[188px] h-[54px] m-1.5  border text-[18px] font-medium font-jost text-[#fff]  border-[#fff]'>Download CV</button>
                </div>

            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Navbar