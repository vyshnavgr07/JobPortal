import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client from '../assets/Clientimage.jpg';
import "../components/Testimonial.css"
const Testimonial = () => {
  const testimonialData = Array(15).fill(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='w-full px-5 py-10'>
      <h1 className='text-4xl md:text-6xl text-center mb-10'>Client Testimonials</h1>
      <div className='mx-auto'>
        <Slider {...settings}>
          {testimonialData.map((_, index) => (
            <div key={index} className='px-4'>
              <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                <div className='p-6'>
                  <p className='text-lg font-semibold'>Joen Samuel</p>
                  <p className='text-gray-600 mt-2'>Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy textLorem Ipsum is simply dummy textLorem Lorem</p>
                </div>
                <div className='p-4 bg-gray-100 border-t border-gray-200 flex items-center'>
                  <div className='mr-4'>
                    <img className='h-12 w-12 rounded-full' src={client} alt='Client' />
                  </div>
                  <div>
                    <p className='font-semibold'>John Samuel</p>
                    <p className='text-gray-600 text-sm'>User</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
