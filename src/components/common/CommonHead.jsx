import React from 'react'
import tag from '../../assets/images/Tag Text.png'

const CommonHead = ({ headh2 , headp}) => {
  return (
    <div className='flex gap-[10px] '>



        <div className=' '> <img src={tag} alt="common-img" /></div>
        <p className='text-[18px] font-medium font-main text-[#E5745D]'>{headp}</p>
        <h2 className=' text-[50px] font-medium font-main text-main'>{headh2}</h2>



    </div>
  )
}

export default CommonHead