import React, { useState } from 'react';
import {Link} from "react-router-dom";
import styles from "../styles/CarBrands.module.css";

import audi from "../images/icons/audi.png";
import bentley from "../images/icons/bentley.png";
import benz from "../images/icons/benz.png";
import porsche from "../images/icons/porsche.png";
import chevrolet from "../images/icons/chevrolet.png";
import maserati from "../images/icons/maserati.png";
import rollsRoyce from "../images/icons/rolls-royce.png";
import tesla from "../images/icons/tesla.png";

const CarBrands = () => {

    const [icon] = useState([
        {path: "/porsche" , icon: porsche , id:1} , {path: "/bentley" , icon: bentley , id:2},
        {path: "/rolls-royce" , icon: rollsRoyce , id:3} , {path: "/audi" , icon: audi , id:4},
        {path: "/chevrolet" , icon: chevrolet , id:5} , {path: "/maserati" , icon: maserati , id:6},
        {path: "/benz" , icon: benz , id:7} , {path: "/tesla" , icon: tesla , id:8},
    ])

    return (
        <div className={styles.container}>
            {icon.map(item => 
                <Link key={item.id} to={item.path}>
                    <img src={item.icon} alt="brand" />
                </Link>
            )}
        </div>
    );
};

export default CarBrands;