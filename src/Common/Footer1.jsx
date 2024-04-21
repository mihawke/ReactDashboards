import React from 'react'
import styles from './Footer1.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer1 = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.frame1}>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <button className={styles.button}>Get Demo</button>
            </div>
            <div className={styles.frame2}>
                <div className={styles.info}>
                    <div className={styles.logo}>
                        PixelForge.io
                    </div>
                    <div className={styles.copyright}>
                        <p className={styles.text}>Copyright © 2024 PixelForge.io ltd. <br />All rights reserved</p>
                    </div>
                    <div className={styles.socials}>
                        <a><FaInstagram className={styles.icon} size={20} /></a>
                        <a><FaFacebookF className={styles.icon} size={20} /></a>
                        <a><FaTwitter className={styles.icon} size={20} /></a>
                        <a><FaYoutube className={styles.icon} size={20} /></a>
                    </div>
                </div>
                <div className={styles.links}>
                    <div className={styles.column}>
                        <a className={styles.title}>Company</a>
                        <a className={styles.item}>About us</a>
                        <a className={styles.item}>Blog</a>
                        <a className={styles.item}>Contact us</a>
                        <a className={styles.item}>Pricing</a>
                        <a className={styles.item}>Testimonials</a>
                    </div>
                    <div className={styles.column}>
                        <a className={styles.title}>Support</a>
                        <a className={styles.item}>Help center</a>
                        <a className={styles.item}>Terms of services</a>
                        <a className={styles.item}>Legal</a>
                        <a className={styles.item}>Privacy policy</a>
                        <a className={styles.item}>Status</a>
                    </div>
                    <div className={styles.column}>
                        <p className={styles.title}>Stay up to date</p>
                        <input type='email' id='email' className={styles.input} placeholder='Your email address'></input>
                        <label htmlFor="email"></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer1