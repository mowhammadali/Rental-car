import React from 'react';
import {Link} from "react-router-dom"
import styles from "../styles/CarInfo.module.css";

import lotus from "../images/cars/talisman.png";
import renault from "../images/icons/renault.png";
import arrowDown from "../images/icons/arrow-down.png";
import home from "../images/icons/home.png";

const CarInfo = () => {
    return (
        <div className={styles.container}>
            <span>
                <Link to="/">
                    <img src={home} alt='home'/>
                </Link>
            </span>
            <div className={styles.header}>
                <img className={styles.renaultIcon} src={renault} alt='renault'/>
                <h2>talisman</h2>
            </div>
            <div className={styles.content}>
                <img className={styles.renault} src={lotus} alt='car'/>
                <p>Renault Talisman drives with aplomb, with electronically controlled suspension.
                     The Renault Multi-Sense® system modifies every aspect of the vehicle’s handling,
                      like having several cars in one vehicle. Intensify your driving experience. 
                </p>
            </div>
            <div className={styles.more}>
                <p className={styles.about}>More About</p>
                <img className={styles.arrow} src={arrowDown} alt='arrow'/>
            </div>
        </div>
    );
};

export default CarInfo;