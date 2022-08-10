import React, { useState } from 'react';
import { v4 } from 'uuid';
import styles from "../styles/Cars.module.css";

import Car from './Car';

import arrow from "../images/icons/arrow.png";
import benz from "../images/cars2/benz.webp";
import bmw from "../images/cars2/bmw.jpg";
import lamborghini from "../images/cars2/lamborghini.jpg";
import mazda from "../images/cars2/mazda.webp";
import nissan from "../images/cars2/nissan.jpg";
import toyota from "../images/cars2/toyota.jpg";

const Cars = () => {

    const [data] = useState([
        {car: benz , cost:82.40 , name:`Benz Sport 2021`},
        {car: bmw , cost:85.75 , name:`Bmw Sport 2022`},
        {car: lamborghini , cost:89.30 , name:`Lamborghini Red 2022`},
        {car: mazda , cost:80.10 , name:`Mazda 2019`},
        {car: nissan , cost:82.90 , name:`Nissan Sport 2021`},
        {car: toyota , cost:87.50 , name:`Toyota Sport 2022`}
    ])

    return (
        <div className={styles.container}>
            <h3>Collection</h3>
            <h1>Our Collection Cars</h1>
            <div className={styles.cars}>
                {data.map(item => <Car key={v4()} image={item.car} cost={item.cost} name={item.name}/>)}
            </div>
            <button className={styles.seeCars}>
                <p>See all cars</p>
                <img src={arrow} alt='arrow'/>
            </button>
        </div>
    );
};

export default Cars;