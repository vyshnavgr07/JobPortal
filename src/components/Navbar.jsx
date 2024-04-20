import React from 'react'
import image from "../assets/logo.png";
import "./Home.css"
const Navbar = () => {
  return (
    <div className='flex justify-between '>
        <div className='w-1/5 pr-2'  >
            <img  src={image}/>
        </div>

       <div className='flex w-2/4 pr-2 justify-between items-center'>
        <p className='p-5'>Profesional</p>
        <p className='p-5'>Service</p>
        <p className='p-5'>About</p>
        <p className='p-5'>Contact</p>
        <input className='h-2/4 rounded-2xl centered-placeholder' type="text" placeholder="Enter job title keyword" />
       </div>


        <div className='flex  justify-between'>
       <p className='p-5'>Login</p>
       <p className='p-5'>Signup</p>
        </div>
    </div>
  )
}

export default Navbar