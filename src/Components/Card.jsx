import React , {useEffect} from 'react';
import styles from "../styles/Card.module.css";

import Aos from "aos";
import "aos/dist/aos.css";

const Card = ({img , title , text}) => {

    useEffect(() => {

        Aos.init({
            delay: 0,
            duration: 3000
            
        })

        Aos.refresh();
        
    } , [])

    return (
        <div className={styles.card} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2200">
            <img src={img} alt="service"/>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
};

export default Card;