import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsMinecart } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=' relative  bottom-0 w-[100%] bg-red-400 h-96 text-white flex justify-evenly items-center '>
        <div className='w-[25%] flex flex-col items-center'>
            <BsMinecart className='text-4xl'/>
              <h1 className='text-2xl py-6  '>Sonal ka Marad Harfu</h1>
            <div className='flex space-x-4 text-xl'>
                <FaInstagramSquare />
                <FaFacebook />
                <FaSquareXTwitter />
                <FaLinkedin />
            </div>
        </div>

        <div className='w-[25%] flex flex-col items-center '>
            <p className='text-3xl pb-4'>Get in touch with us for the best quality custom prints & supplies.</p>
            <p className='text-xl'>Lorem ipsum,facere explicabo earum voluptatum doloremque blanditiis alias tempora necessitatibus.</p>
        </div>

        <div className='w-[25%] h-52 flex flex-col items-center'>
            <h1 className='text-2xl pr-16'>Quick Links</h1>
            <div className='space-y-4 flex flex-col items-start pt-8 text-xl'>
                <a href="#">Know more about us</a>
                <a href="#">Visit Site</a>
                <a href="#">Lets's Connect</a>
            </div>
        </div>

        <div className='w-[25%] h-52 flex flex-col items-center '>
            <h1 className='text-2xl'>Important Links</h1>
            <div className='space-y-4 flex flex-col items-start pt-8 text-xl '>
                <a href="#">Privacy Policy</a>
                <a href="#">Shipping Details</a>
                <a href="#">Terms & Condition</a>
            </div>
        </div>
    </div>
  )
}

export default Footer