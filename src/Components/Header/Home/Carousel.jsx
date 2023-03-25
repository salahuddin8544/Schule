import React from 'react';
import Typical from 'react-typical';
import '../Home/Carousel/Carousel.css'
const img1 = '../../../../src/assets/carousel/pick-1.jpeg'
const images = [
        '../../../../src/assets/carousel/pick-1.jpeg',
        '../../../../src/assets/carousel/pick-2.jpeg',
        '../../../../src/assets/carousel/pick-3.jpeg',
    ]

    const imageCarousel = document.getElementById('box');
    console.log(imageCarousel);
const Carousel = () => {
   
    
        let imageIndex = 0;
        setInterval(()=>{
         if(imageIndex === images.length){
            imageIndex = 0;
         }
         const imageLink = images[imageIndex];
         imageCarousel.setAttribute('src', imageLink);
         imageIndex ++
        },3000)

    return (
        <div className='relative'>      
            <img id='box' src={img1} className='w-full h-1/2 brightness-50 contrast-100 z-[-1]' alt="" />
    
               <div className='absolute top-2 md:top-32 left-3 md:left-16 right-3 md:right-10'>
               <div className="">
                <h3 className='text-2xl md:text-4xl text-white'>

                        <Typical
                        loop={Infinity}
                        wrapper='h3'
                        steps={[
                        `Our Classes that fit your busy life and leisure`,
                        2000,
                        ]}
                    />
            </h3>
            </div>
            <div className="my-4 md:my-12">
                <p id='change' className='text-lg md:text-xl text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod blanditiis earum cupiditate quae quos optio maxime officia nesciunt quia eaque animi minima nihil delectus similique facilis, repellendus minus nemo. Aperiam.</p>
            </div>
            
            <div className="">
            <button className='bg-cyan-400 font-[poppins] duration-500 px-6 py-2 hover:bg-cyan-500 rounded'>Explore more</button>
            </div>
               </div>
        </div>
    );
};

export default Carousel;