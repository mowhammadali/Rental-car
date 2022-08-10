import React, { useState , useEffect } from 'react';
import {Routes , Route , Link} from "react-router-dom";
import styles from "../styles/BannerImg.module.css";

import CarInfo from './CarInfo';

import Aos from "aos";
import "aos/dist/aos.css";

import audi from "../images/cars/audi.png";
import bentley from "../images/cars/bentley.png";
import benz from "../images/cars/benz.png";
import porsche from "../images/cars/porsche.png";
import chevrolet from "../images/cars/chevrolet.png";
import maserati from "../images/cars/maserati.png";
import rollsRoyce from "../images/cars/rolls-royce.png";
import tesla from "../images/cars/tesla.png";

const BannerImg = () => {

    const [route] = useState([
        {path: "/" , src: porsche , alt: "porsche" , id:1} , {path: "/porsche" , src: porsche , alt: "porsche" , id:2},
        {path: "/bentley" , src: bentley , alt: "bentley" , id:3} , {path: "/rolls-royce" , src: rollsRoyce , alt: "rolls-royce" , id:4},
        {path: "/audi" , src: audi , alt: "audi" , id:5} , {path: "/chevrolet" , src: chevrolet , alt: "chevrolet" , id:6},
        {path: "/maserati" , src: maserati , alt: "maserati" , id:7} , {path: "/benz" , src: benz , alt: "benz" , id:8},
        {path: "/tesla" , src: tesla , alt: "tesla" , id:9}
    ])

    useEffect(() => {

        Aos.init({
            delay: 0,
            duration: 1400
            
        })

        Aos.refresh();
        
    } , [])

    const width = window.innerWidth;

    return (
        <div className={styles.container} data-aos={width <= 992 ? "fade-up" : "fade-left"} data-aos-easing="ease-in-sine">
            <Routes>
                {route.map(item => <Route key={item.id} path={item.path} element={<Link to={`${item.path == "/" ? `/more` : `${item.path}/more`}`}><img src={item.src} alt={item.alt}/></Link>}/>)}
            </Routes>
            <Routes>
                <Route path="/benz/more" element={<CarInfo />}/>
            </Routes>
        </div>
    );
};

export default BannerImg;