import React from 'react';
import styles from "../styles/Banner.module.css";

import BannerContent from './BannerContent';
import BannerImg from "./BannerImg";

const Banner = () => {

    return (
        <div className={styles.container}>
            <BannerContent />
            <BannerImg />
        </div>
    );
};

export default Banner;