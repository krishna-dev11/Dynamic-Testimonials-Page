import React, { useState } from 'react'
import Card from './Card'
import { FaAngleLeft,FaAngleRight} from "react-icons/fa";

const Testimonials = (props) => {

   const[index,setindex]=useState(0)

    function handlenextreview()
    {
        if(index+1>=props.reviews.length)
        {
            setindex(0);
        }
        else
        {
            setindex(index+1)
        }
    }

    function handleprevousreviews()
    {
        if(index-1<0)
        {
            setindex(props.reviews.length-1)
        }
        else
        {
           setindex(index-1)
        }
    }

    function handlesuperisereviews()
    {
        setindex(Math.floor(Math.random()*(props.reviews.length)))
    }

  return (
    <div className='bg-white rounded-md hover:shadow-xl flex flex-col justify-center items-center h-[30rem]
    w-[35rem] mt-[3rem] gap-5'>
        <Card reviews={props.reviews[index]}/>
        <div className='flex gap-10'>
            <div onClick={handlenextreview}>
                <FaAngleLeft/>
            </div>
            <div onClick={handleprevousreviews}>
                <FaAngleRight/>
            </div>
        </div>
        <button className='px-[2rem] py-[.5rem] rounded-md bg-purple-400 text-white font-medium' onClick={handlesuperisereviews}>Surprise Me</button>
        
    </div>
  )
}

export default Testimonials