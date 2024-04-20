import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
const Countup = () => {
    const [counter,setcounter]=useState(false)
  return (
  <ScrollTrigger onEnter={()=>setcounter(true)}  onExit={()=>setcounter(false)}>
 <div style={{
        width:'100%',
         color:'black',
       
    }}>
<h1>
    {
        counter &&  <CountUp start={0} end={1000} duration={2} delay={0}/>
    }
   
</h1>
    </div>

  </ScrollTrigger>
   
  )
}

export default Countup
