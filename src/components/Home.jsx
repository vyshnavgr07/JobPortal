import React from 'react'
import Nav from './Nav'
import client from "../assets/Clientimage.jpg"
import Navbar from './Navbar'
import "./Home.css"
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import Countup from './Countup'
const Home = () => {
  return (
   <> 
   
  <Navbar/>

<div className='flex pt-5 90vh bg-slate-600  ' >

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

<div className='flex pt-8'>

<div class="w-6/12 max-w-full px-3 text-center lg:w-3/12">
  <div class="py-4 border border-rounded-lg border-gray-300 bg-gradient-to-br from-zinc-400-300-200 to-yellow-100 shadow-md">
  <div class="flex items-center justify-center">
    <h4 class="font-bold text-4xl dark:text-blue-600">
        <Countup/>
      </h4>
    </div>
    <h6 class="relative mb-2 text-transparent z-1 bg-clip-text bg-gradient-to-tl from-purple-700 to-pink-500 text-lg font-semibold tracking-wide">Jobs</h6>
   
  </div>
</div>
<div class="w-6/12 max-w-full px-3 text-center lg:w-3/12">
  <div class="py-4 border border-rounded-lg border-gray-300 bg-gradient-to-br from-yellow-200 to-yellow-100 shadow-md">
  <div class="flex items-center justify-center">
      <h4 class="font-bold text-4xl dark:text-blue-600">
        <Countup/>
      </h4>
    </div>
    <h6 class="relative mb-2 text-transparent z-1 bg-clip-text bg-gradient-to-tl from-purple-700 to-pink-500 text-lg font-semibold tracking-wide">Profesional</h6>
   
  </div>
</div>

<div class="w-6/12 max-w-full px-3 text-center lg:w-3/12">
  <div class="py-4 border border-rounded-lg border-gray-300 bg-gradient-to-br from-yellow-200 to-yellow-100 shadow-md">
  <div class="flex items-center justify-center">
      <h4 class="font-bold text-4xl dark:text-blue-600">
        <Countup/>
      </h4>
    </div>
    <h6 class="relative mb-2 text-transparent z-1 bg-clip-text bg-gradient-to-tl from-purple-700 to-pink-500 text-lg font-semibold tracking-wide">Revenue</h6>
    
  </div>
</div>

<div class="w-6/12 max-w-full px-3 text-center lg:w-3/12">
  <div class="py-4 border border-rounded-lg border-gray-300 bg-gradient-to-br from-yellow-200 to-yellow-100 shadow-md">
  <div class="flex items-center justify-center">
      <h4 class="font-bold text-4xl dark:text-blue-600">
        <Countup/>
      </h4>
    </div>
    <h6 class="relative mb-2 text-transparent z-1 bg-clip-text bg-gradient-to-tl from-purple-700 to-pink-500 text-lg font-semibold tracking-wide">Refund</h6>
  
  </div>
</div>

</div>



{/* popular Vaccancy */}
<div className='mt-10 bg-orange-200  w-full ' >
  <h1 className='text-start text-6xl pb-5' >Most Popular Vaccancy</h1>
  <div  className='  flex flex-wrap justify-between'>


{[...Array(16)].map((x)=>(
 <div className=' h-20 w-60   p-2 m-3 bg-slate-50 hover:bg-slate-700'>
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