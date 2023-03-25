import React from 'react';
import './Strage.css'
import img1 from '../../../../../src/assets/strages/pic-1.jpeg'
import img2 from '../../../../../src/assets/strages/pick2.jpeg'
import img3 from '../../../../../src/assets/strages/pic3.jpeg'
import img4 from '../../../../../src/assets/strages/pic4.jpeg'
const Strages = () => {
   
    return (
        <div className=' bg-white text-black py-20'>
           <div className='w-3/4 left-20 mx-auto text-center'>
           <div className=''>
           <h3 className='text-2xl md:text-4xl font-medium'>Strategies for Success</h3>
            <hr className='w-20 text-center border-2 mx-auto border-cyan-400' />
            <p className='text-slate-500 text-lg md:text-xl mb-4'>We are an academic residential college made up of students, scholars, old collegians and staff members. Our rich history is the foundation for our values We are diverse, welcoming, accepting and passionate about being the best we can be. Join us to make your college experience unforgettable.</p>
           </div>
           </div>
            <div >
            <div className=' grid grid-cols-1 relative md:grid-cols-2 lg:grid-cols-4 w-3/4 mx-auto'>
                <div className="relative">
                    <img className='' src={img1} alt="" />
                    <a className='absolute left-4 top-3/4 text-white text-2xl' href="">Learn about School</a>
                </div>
                <div className="relative">
                    <img className='' src={img2} alt="" />
                    <a className='absolute left-4 top-3/4 text-white text-2xl' href="">Requist Infromation</a>
                </div>
                <div className="relative">
                    <img className='' src={img3} alt="" />
                    <a className='absolute left-4 top-3/4 text-white text-2xl' href="">Visit a campus</a>
                </div>
                <div className="relative">
                    <img className='' src={img4} alt="" />
                    <a className='absolute left-4 top-3/4 text-white text-2xl' href="">Apply Online</a>
                </div>

            </div>
             
        
        </div>
   
        </div>
    );
};

export default Strages;