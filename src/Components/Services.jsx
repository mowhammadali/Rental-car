import React, { useState } from 'react';
import styles from "../styles/Services.module.css";

import Card from './Card';

import easy from "../images/icons/easy.png";
import atom from "../images/icons/atom.png";
import safe from "../images/icons/safe.png";

const Services = () => {

    const [data] = useState({
        img1: easy,
        title1: `Quality Choice`,
        text1: `Search from a wide selection of cars curated by Renty partners with fast and easy way`,
        img2: atom,
        title2:`Exclusive Service`,
        text2:`Renty partners are ready to help you find your dream car for your holiday in the city`,
        img3: safe,
        title3:`Fast and Safe`,
        text3:`Transection process is completed within 24 hours`
    })

    return (
        <div className={styles.container}>
            <h4 className={styles.title}>Our Service</h4>
            <h1>We have best service<br /> for the rent cars</h1>
            <p>Get the car of your dreams with the installments of your choice.
                There are various attractive offers<br /> from Moladin through our collaboration
                with various trusted leasing partners.
            </p>
            <div className={styles.cards}>
                <Card img={data.img1} title={data.title1} text={data.text1}/>
                <Card img={data.img2} title={data.title2} text={data.text2}/>
                <Card img={data.img3} title={data.title3} text={data.text3}/>
            </div>
        </div>
    );
};

export default Services;