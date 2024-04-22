import React, { useContext, useState } from 'react';
import logo from "../assets/logo.png";
import client from "../assets/profesionalImage.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from '../App';


const Prologin = () => {

return (

    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">

      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className='flex    justify-between items-center p-4 ' >
            <div className="text-center mr-6">
              <img src={logo} className="w-32 mx-auto mb-8" alt="Logo" />
            </div>
            {/* <div className="text-center  flex   w-1/2 bg-slate-500"> */}

               <Link to={'/login'}>
                  <button className="md:w-[200px] w-[150px] h-[50px] sm:px-8  rounded-lg font-medium bg-blue-500 text-white-500 hover:bg-blue-800 transition-all duration-300 ease-in-out focus:outline-none mb-6" >
                    Client Login
                  </button>   </Link> 
            
            {/* </div> */}



          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <FcGoogle />
                  </div>
                  <span className="ml-4">Sign In with Google</span>
                </button>
              </div>
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign In with Cartesian E-mail
                </div>
              </div>
              <div className="mx-auto max-w-xs">
                <input className="w-full px-4 sm:px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-3" type="email" placeholder="Email" />
                <input className="w-full px-4 sm:px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-3" type="password" placeholder="Password" />
                <button className="w-full px-4 sm:px-8 py-4 rounded-lg font-medium bg-violet-500 text-white-500 hover:bg-violet-800 transition-all duration-300 ease-in-out focus:outline-none mb-6">
                  Login In
                </button>
                <p className="text-xs text-gray-600 text-center font-bold">
                  Don’t have an account ?  <span className='text-orange-400'>Sign up</span>

                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg--100 lg:flex hidden  bg-white">
          <div className="  w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${client})` }} />

        </div>
      </div>
    </div>
  )
}

export default Prologin