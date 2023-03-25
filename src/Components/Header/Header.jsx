import React from 'react';
import './Header.css';
import img from '../../../src/assets/logo/logo.png'
const Header = () => {
    
    
    // const Menu = (e)=>{
    //     let list = document.querySelector('ul');
    //     e.name === 'menu'? (e.name = 'close',list.classList.add('top-[80px]'), list.classList.add('opacity-100')):
    //     (e.name = 'menu', list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
    // }

    const Menu = ()=>{
        const ul = document.getElementById('list-item');
        ul.style.display='block';
        
       
    }

    // md:z-auto  bg-white w-full left-0 md:w-auto md-py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400]
    return (
        <div className=''>
            
            <nav className='p-5 bg-purple-500 shadow md:flex md:items-center md:justify-between'>
               <div className='flex justify-between items-center'>
               <span className='text-4xl text-cyan-400 font-[poppins] cursor-pointer'>
                    <img className='  inline' src={img} alt="" />
                </span>
                <span  onClick={Menu} className='md:hidden text-black text-3xl cursor-pointer '>
                <ion-icon name="menu"></ion-icon>
                </span>
               </div>
               <ul id='list-item' className='hidden md:flex items-center transition-all  ease-in duration-700'>
                <li  className='mx-4 my-6 md:my-0 '> 
                    <a href="#" className='text-xl text-cyan-200 hover:text-cyan-500 duration-500'>HOME</a>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <a href="#" className='text-xl text-cyan-200 hover:text-cyan-500 duration-500'>HOME</a>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <a href="#" className='text- text-cyan-200 hover:text-cyan-500 duration-500'>HOME</a>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <a href="#" className='text-xl text-cyan-200 hover:text-cyan-500 duration-500'>HOME</a>
                </li>
                <button className='bg-cyan-400 text-white font-[poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded'>Login</button>
               </ul>
            </nav>
        </div>
    );
};

export default Header;