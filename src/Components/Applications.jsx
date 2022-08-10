import React from 'react';
import styles from "../styles/Applications.module.css";

import appleStore from "../images/icons/apple2.png";
import googlePlay from "../images/icons/google-play.png";

const Applications = () => {
    return (
        <div className={styles.container}>
            <h1>Let's drive with Renty today!</h1>
            <p>Get the app to explore the world  of premium cars.
                get fast and safe transection to help you find your dream rent.
            </p>
            <div className={styles.buttons}>
                <button className={styles.appStore}>
                    <img src={appleStore} alt='app-store'/>
                    <p>App Store</p>
                </button>
                <button className={styles.googlePlay}>
                    <img src={googlePlay} alt='google-play'/>
                    <p>Google Play</p>
                </button>
            </div>
        </div>
    );
};

export default Applications;