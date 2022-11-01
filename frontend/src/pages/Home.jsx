import React from 'react';
import { Footer } from "../assets/components/Footer";
import { Header } from "../assets/components/Header";
import { Products } from "../assets/components/Products";

function Home (){
    return <>
    <Header />
    <Products />
    <Footer />
    </>
}

export default Home;