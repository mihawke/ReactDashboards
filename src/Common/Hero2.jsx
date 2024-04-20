import React from 'react'
import styles from './Hero2.module.css'

const Hero2 = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.frame1}>
                <p className={styles.text1}>Heading</p>
                <p className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className={styles.button}>Get Started</button>
            </div>
            <div className={styles.frame2}>
                <img style={{ width: 300, height: 300 }} src='/src/assets/placeholderImg.webp'></img>
            </div>
        </div>
    )
}

export default Hero2