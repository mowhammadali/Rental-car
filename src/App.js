import React from 'react';
import {Routes , Route} from "react-router-dom";

import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import CarBrands from './Components/CarBrands';
import Collection from "./Components/Collection";
import Services from './Components/Services';
import Cars from './Components/Cars';
import Footer from './Components/Footer';
import CarInfo from './Components/CarInfo';
import axios from 'axios';

const App = () => {
    React.useEffect(() => {
        axios.get('/posts')
        .then(res => console.log(res))
    } , [])
    return (
        <>
            <Navbar />
            <Banner />
            <CarBrands />
            <Collection />
            <Services />
            <Cars />
            <Footer />
        </>
    );
};

export default App;