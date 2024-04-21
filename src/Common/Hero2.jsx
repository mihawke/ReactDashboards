import React from 'react'
import styles from './Hero2.module.css'

const Hero2 = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.frame1}>
                <p className={styles.title}>Main big title here</p>
                <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className={styles.button}>CTA</button>
            </div>
            <div className={styles.frame2}>
                <img style={{ width: 500, height: 446 , backgroundColor:'#333333' }} src='/src/assets/common/hero3.png'></img>
            </div>
        </div>
    )
}

export default Hero2