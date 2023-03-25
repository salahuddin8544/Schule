import React from 'react';

import img from '../../../../../src/assets/background-image/background.jpeg'
import news1 from '../../../../../src/assets/News/asset 3.jpeg'
import news2 from '../../../../../src/assets/News/asset 4.jpeg'
import news3 from '../../../../../src/assets/News/asset 5.jpeg'
import news4 from '../../../../../src/assets/News/asset 6.jpeg'
import news5 from '../../../../../src/assets/News/asset 7.jpeg'
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./News.css";

// import required modules 
import { Pagination } from "swiper";
const News = () => {
    return (
        <div style={{backgroundImage: `url(${img})`}}
        className='justify-center absolute w-full h-screen py-20 bg-no-repeat bg-cover bg-center rounded-lg'>
  
         <div className='w-4/5 left-20 mx-auto text-center'>
           <h3 className='text-4xl font-medium'>School News</h3>
            <hr className='w-20 text-center border-2 my-6 mx-auto border-cyan-400' />
           
           </div>
              <>
          <div className=' w-3/4 left-20 mx-auto text-center'>
          <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       <SwiperSlide> 
       <SwiperSlide> 
             
             </SwiperSlide>
             
        </SwiperSlide>
        <SwiperSlide> 
         <div>
         <div className="bg-white text-black text-start w-56 md:w-96">
          <div className='relative'>
          <img className='w-full' src={news1}/>  
          <a className='absolute top-3/4 left-4 bg-cyan-400 px-2 text-white' href="">December 4, 2022</a>   
          </div>
          <div className='px-2 py-6'>
          <h2 className="text-cyan-400">Eclat</h2>
          <a className='text-black'>How Open and Accessible is University Research? – Find Out</a>
          </div>
      </div >       
         </div>
         <div>
         <div className="bg-white text-black text-start w-56 md:w-96">
          <div className='relative'>
          <img className='w-full' src={news2}/>  
          <a className='absolute top-3/4 left-4 bg-cyan-400 px-2 text-white' href="">February 14, 2022</a>   
          </div>
          <div className='px-2 py-6'>
          <h2 className="text-cyan-400">Eclat</h2>
          <a className='text-black'>
                Where our Students does Celebrate this Summer’s Victory?</a>
          </div>
      </div >       
         </div> 
         <div>
         <div className="bg-white text-black text-start w-56 md:w-96">
          <div className='relative'>
          <img className='w-full' src={news3}/>  
          <a className='absolute top-3/4 left-4 bg-cyan-400 px-2 text-white' href="">March 22, 2022</a>   
          </div>
          <div className='px-2 py-6'>
          <h2 className="text-cyan-400">Education</h2>
          <a className='text-black'>
          Setting up the Office for Students: What’s New</a>
          </div>
      </div >       
         </div> 
         <div>
         <div className="bg-white text-black text-start w-56 md:w-96">
          <div className='relative'>
          <img className='w-full' src={news4}/>  
          <a className='absolute top-3/4 left-4 bg-cyan-400 px-2 text-white' href="">June 08, 2022</a>   
          </div>
          <div className='px-2 py-6'>
          <h2 className="text-cyan-400">Education</h2>
          <a className='text-black'>Washington 3rd Grade Chromebook Orientation</a>
          </div>
      </div >       
         </div>      
        </SwiperSlide>
      
        <SwiperSlide> 
             
        </SwiperSlide>
        <SwiperSlide> 
             
        </SwiperSlide>
  
      </Swiper>
          </div>
    </>
        <div className='bg-gray-100 py-20 md:py-28'>

        <div className='bg-white text-black grid md:grid-cols-2 w-3/4 mx-auto shadow'>
          
          <div className='py-14 px-10'>
            <h3  className='text-3xl'>Opern Day 2022</h3>
            <p className='text-lg'>Ever wondered what College life is like Take a tour of Wesley College and speak directly to current students to hear about what it’s like to live on campus</p>
            <p className='text-lg mt-4'>Saturday, 26 August 2017</p>
            9am – 4pm
            <a className='block py-0 mt-4' href="#">Learn More</a>
          </div>
          <img src={news5} alt="" />
        </div>
        </div>


            <div className='bg-gray-100 py-20 w-3/4 mx-auto md:py-28'>

              <div className='bg-white text-black grid md:grid-cols-3 gap-4'> 
                <div className="bg-white text-black text-start md:w-96">
                <h3 className='text-4xl font-medium'>School News</h3>
                  <div className='relative'>
                  <img className='' src={news1}/>  
                  <a className='absolute top-3/4 left-4 bg-cyan-400 px-2 text-white' href="">December 4, 2022</a>   
                  </div>
                  <div className='px-2 py-6'>
                  <h2 className="text-cyan-400 text-xl">Success</h2>
                  <a className='text-black text-xl'>How Open and Accessible is University Research? – Find Out</a>
                  <p className='text-lg'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices ipsum non mattis pharetra. Integer laoreet non felis sit amet...
                  </p>
                  </div>
              </div > 

                <div>
                  <div className='text-sm'>
                  <a className='text-cyan-400' href="">Latest</a>-
                  <a className='text-gray-500' href="">Popular</a>-
                  <a className='text-gray-500' href="">Comments</a>
                  </div>
                </div>

              </div>
            </div>
              
        </div>
    );
};

export default News;