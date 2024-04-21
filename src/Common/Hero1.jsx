import React from 'react'
import styles from './Hero1.module.css'

const Hero1 = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.frame1}>
                <p className={styles.text1}>Main big title here</p>
                <p className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className={styles.button}>Get Started</button>
            </div>
        </div>
    )
}

export default Hero1