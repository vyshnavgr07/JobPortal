import React from 'react'

const Tesimonial = () => {
  return (
    <div className='w-3/4 m-auto'>
<div className='mt-20'>
    {[...Array].map((x)=>(
        <div className='bg-yellow-200 h-[450px] text-black rounded-xl'> 
            <div  className='rounded-t-xl bg-indigo-500 flex justify-center items-center h-56'>
          <img 
          className='h-44 w-44'
          src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fletsenhance.io%2F&psig=AOvVaw3wgxALo4oBLb46ZE9_GzsG&ust=1713692421021000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNig5vC_0IUDFQAAAAAdAAAAABAE'   />
            </div>
            <div>
            <p></p>
            <p></p>
            <button>Readmore</button>
            </div>
            </div>
    ))}

</div>
    </div>
  )
}

export default Tesimonial