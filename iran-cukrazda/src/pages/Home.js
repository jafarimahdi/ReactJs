import React from 'react';
import '../App.scss';
import HeroSection from '../component/HeroSection';
import Cards from '../component/Cards';
import { About } from '../component/About';

function Home(){
    return (
        <>
            <HeroSection/>
            <About/>
            <Cards/>
        </>
    )
}
export default Home;