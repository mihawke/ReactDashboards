import React from 'react'
import styles from './Features2.module.css'

const Features2 = () => {
    return (
        <div className={styles.features}>
            <div className={styles.frame1}>
                <div className={styles.card}>
                    <img className={styles.image} src='/src/assets/common/feature1.png'></img>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', width: 255, marginTop: 32, rowGap: 10 }}>
                        <p className={styles.title}>Feature1</p>
                        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img className={styles.image} src='/src/assets/common/feature2.png'></img>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', width: 255, marginTop: 32, rowGap: 10 }}>
                        <p className={styles.title}>Feature2</p>
                        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img className={styles.image} src='/src/assets/common/feature3.png'></img>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', width: 255, marginTop: 32, rowGap: 10 }}>
                        <p className={styles.title}>Feature3</p>
                        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features2