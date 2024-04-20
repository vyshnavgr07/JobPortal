import React from 'react'
import client from "../assets/Clientimage.jpg"
import SliderTestimonial from './Sliders'
import Tesimonial from './Tesimonial'

const Home2 = () => {
  return (
   <>
   {/* popular catagory */}
   <div className='mt-10 bg-orange-200  w-full ' >
  <h1 className='text-start text-6xl pb-5' >Most Popular Catogory</h1>
  <div  className='  flex flex-wrap justify-between'>


{[...Array(8)].map((x)=>(
 <div className=' h-20 w-60   p-2 m-3 bg-slate-50 hover:bg-slate-700 flex'>
    <div className='w-1/4'> 
<img className=' h-full'  src={client}/>
    </div>

    <div className='text-center w-3/4'> 
    <p className='font-bold text-center'>Painter</p>
 <p className='text-center'>45904 available</p> 
</div>

</div>

))}
  </div>
</div>



 {/* popular catagory */}

<Tesimonial/>

   </>
  )
}

export default Home2
