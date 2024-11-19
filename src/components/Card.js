import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className='relative flex flex-col justify-center items-center w-[80%] 
    gap-3'>
        <img className='w-[6rem] rounded-full absolute top-[-8rem] left-[-1rem] z-10' src={props.reviews.image}/>

        <div className='w-[6rem] h-[6rem] rounded-full absolute bg-purple-500 top-[-8.7rem] left-[-.3rem] z-0'></div>

        <div className='text-2xl font-semibold'>{props.reviews.name}</div>

        <div className='text-xs opacity-55'>{props.reviews.job}</div>

        <div><FaQuoteLeft color='purple'/></div>

        <div className='opacity-80'>{props.reviews.text}</div>
         
        <div><FaQuoteRight color='purple' /></div>
    </div>
  )
}

export default Card