import React from "react";


import {useNavigate} from "react-router-dom"; 
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Carrossel from "../../components/Carrossel/Carrossel";
import Valores from "../../components/Valores/Valores";
import FaqSection from "../../components/FaqSection/FaqSection";
import Footer from "../../components/Footer/Footer";




const Home = () => {
    
    return (
        <>
        <Navbar/>
        <HeroSection/>
        <Carrossel/>
        <Valores/> 
        <FaqSection/>
        <Footer/>
        </>
    )


};
export default Home;