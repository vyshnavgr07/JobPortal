import React from 'react'
import client from "../assets/lap.jpg"
import profesional from '../assets/profesionalImage.jpg'
import Tesimonial from './Tesimonial'
import Testimonial from './Tesimonial'
import Footer from './Footer'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Login from './Login'


const Home2 = () => {
  return (
   <>
   {/* popular catagory */}
   <div className='mt-10   w-full ' >
  <h1 className='text-center text-6xl pb-5' >Most Popular Catogory</h1>
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
<Testimonial/>

<div className='flex  mt-10 mb-10  lg:flex-direction: column; '>

  <div className='m-5'>
  <Card className="w-full max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={client}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
       
        <Typography variant="h4" color="blue-gray" className="mb-2">
        Become a Client
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
           Register now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>

  </div>


  <div  className='m-5 '>
  <Card className="w-full max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={profesional}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
       
        <Typography variant="h4" color="blue-gray" className="mb-2">
        Become a profesioanl
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2 hover:shadow-2xl">
          Register now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>

  </div>
</div>





<Footer/>


   </>
  )
}

export default Home2
