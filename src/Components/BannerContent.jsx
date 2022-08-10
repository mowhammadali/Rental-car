import React , {useEffect} from 'react';
import styles from "../styles/BannerContent.module.css";

import Aos from "aos";
import "aos/dist/aos.css";

import phone from "../images/icons/phone.png";

const BannerContent = () => {

    useEffect(() => {

        Aos.init({
            delay: 0,
            duration: 1400
            
        })

        Aos.refresh();
        
    } , [])

    const width = window.innerWidth;

    return (
        <div className={styles.container} data-aos={width <= 992 ? "fade-down" : "fade-right"} data-aos-easing="ease-in-sine">
            <h1>Search and find your best car rental with easy way</h1>
            <p>Drive performance and your cross-functional collaboration with easy-to-use
                dashboards. data visualizations. and automated insights in one click
            </p>
            <div className={styles.buttons}>
                <button>
                    <p>Booking now</p>
                    <img src={phone} alt="booking-now"/>
                </button>
                <a href='*'>See all cars</a>
            </div>
        </div>
    );
};

export default BannerContent;