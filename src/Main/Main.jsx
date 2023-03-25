import React from 'react';
import Header from '../Components/Header/Header';
import Carousel from '../Components/Header/Home/Carousel';
import News from '../Components/Header/Home/News/News';
import Strages from '../Components/Header/Home/Strages/Strages';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Carousel></Carousel>
            <Strages></Strages>
             <News></News>
          
        </div>
    );
};

export default Main;