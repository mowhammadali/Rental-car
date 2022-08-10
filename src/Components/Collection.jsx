import React from 'react';
import styles from "../styles/Collection.module.css";

import maseraties from "../images/cars/mustang4.jpg";
import arrow from "../images/icons/arrow.png";

const Collection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={maseraties} alt='cars'/>
            </div>
            <div className={styles.content}>
                <a href='*'>About Us</a>
                <h1>More than 150+ special collection cars</h1>
                <p>Get the car of your dreams with the installments of your choice.
                     There are various attractive offers from Moladin through our collaboration
                     with various trusted leasing partners.
                </p>
                <button>
                    <p>See all cars</p>
                    <img src={arrow} alt="arrow"/>
                </button>
            </div>
        </div>
    );
};

export default Collection;