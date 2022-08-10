import React, { useState } from 'react';
import styles from "../styles/Navbar.module.css";

import apple from "../images/icons/apple.png";
import circledMenu from "../images/icons/circled-menu.png";
import close from "../images/icons/close.png";

const Navbar = () => {

    const [toggle , setToggle] = useState(false); 

    return (
        <div id={styles.navbar}>
            <div className={styles.brand}>
                <h1>Renty</h1>
            </div>
            <div className={`${styles.menu} ${toggle && styles.active}`}>
                <div className={styles.close}>
                    <img onClick={() => setToggle(!toggle)} src={close} alt='close'/>
                </div>
                <h1>Renty</h1>
                <ul>
                    <li>About</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={styles.downloadApp}>
                <button>
                    <img src={apple} alt="apple"/>
                    <p>Download App</p>
                </button>
            </div>
            <div className={styles.circledMenu}>
                <img onClick={() => setToggle(!toggle)} src={circledMenu} alt='circle-menu'/>
            </div>
        </div>
    );
};

export default Navbar;