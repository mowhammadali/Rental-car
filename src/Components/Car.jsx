import React from 'react';
import styles from "../styles/Car.module.css";

import dollar from "../images/icons/dollar.png";
import phone from "../images/icons/phone.png";


const Car = ({image , cost , name}) => {
    return (
        <div className={styles.car}>
            <img className={styles.carImg} src={image} alt="car"/>
            <div className={styles.price}>
                <img src={dollar} className={styles.dollar} alt='dollar'/>
                <h4>{cost}</h4>
            </div>
            <h3>{name}</h3>
            <button>
                <p>Booking now</p>
                <img src={phone} className={styles.phone} alt='phone'/>
            </button>
        </div>
    );
};

export default Car;