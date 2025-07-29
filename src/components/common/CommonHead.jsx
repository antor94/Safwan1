import React from 'react'
import tag from '../../assets/images/Tag Text.png'

const CommonHead = ({ headh2 , headp}) => {
  return (
    <div className='flex flex-col'>



        <div className='flex gap-[12px] items-center'>
            <img src={tag} alt="common-img" />

        <p className='text-[18px] font-medium font-main text-[#E5745D]'>{headp}</p>
        </div>
        <h2 className='text-[50px] font-medium font-main text-main'>{headh2}</h2>



    </div>
  )
}

export default CommonHead