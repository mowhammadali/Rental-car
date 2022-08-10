import React from 'react';
import styles from  "../styles/Footer.module.css";

import Applications from './Applications';

import facebook from "../images/icons/facebook.png";
import instagram from "../images/icons/instagram.png";
import twitter from "../images/icons/twitter.png";
import telegram from "../images/icons/telegram.png";

const Footer = () => {
    return (
        <div className={styles.container}>
            <Applications />
            <div className={styles.brand}>
                <h1>Renty</h1>
            </div>
            <div className={styles.menu}>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Category</li>
                    <li>Resources</li>
                </ul>
            </div>
            <div className={styles.socialMedia}>
                <img src={facebook} alt='social-media'/>
                <img src={instagram} alt='social-media'/>
                <img src={twitter} alt='social-media'/>
                <img src={telegram} alt='social-media'/>
            </div>
        </div>
    );
};

export default Footer;