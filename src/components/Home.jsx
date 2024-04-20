import React, { useState } from 'react'
import Nav from './Nav'
import client from "../assets/Clientimage.jpg"
import Navbar from './Navbar'
import "./Home.css"
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import Countup from './Countup'
import CountUp from 'react-countup'
import ScrollTrigger from "react-scroll-trigger";
const Home = () => {
  const [counterOn, setcounteron]=useState(false)
  return (
   <> 
   
  <Navbar/>

<div className='flex pt-5 90v ' style={{backgroundColor:'#F8F8FF'}}>

    <div className=' w-2/3 '>
        <h1 className='text-6xl'>Find a employee that suits your interest.</h1>
        <h6 className='text-2xl p-10'>Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
in scelerisque leo, eget sollicitudin velit bestibulum.</h6>
             <div className='pt-4 flex '>
             <div className='w-3/4 flex justify-around    '>
             <input type="text" className=' centered-placeholder h-full w-56 pr-10 border-blue-950' placeholder="Enter job title keyword" />
             <input  className='centered-placeholder h-full w-56 border-blue-500'   placeholder='Your location '/>
             </div>
               <div className='w-1/5'>
                <button  type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 p-5">find</button>
                </div>
               
             </div>
    </div>


    <div className='w-1/3'>
        <img className=' '  src={client}/>
    </div>
</div>


{/* count up */}

<div className='mt-20'>
<Countup/>
</div>










{/* popular Vaccancy */}
<div className='mt-10  w-full ' >
  <h1 className='text-start text-6xl pb-5' >Most Popular Vaccancy</h1>
  <div  className='  flex flex-wrap justify-between'>


{[...Array(16)].map((x)=>(
 <div className=' h-20 w-60   p-2 m-3 bg-slate-50 hover:bg-slate-700  shadow-xl'>
 <p className='font-bold'>Painter</p>
 <p className=''>45904 available</p>
</div>

))}
  </div>
</div>


</>
  )
}

export default Home