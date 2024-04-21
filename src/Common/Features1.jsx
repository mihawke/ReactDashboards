import React from 'react'
import styles from './Features1.module.css'

const Features1 = () => {
    return (
        <div className={styles.features}>
            <div className={styles.frame1}>
                <div className={styles.card}>
                    <img className={styles.image} src='/src/assets/common/feature1.png'></img>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' , width:450 , marginLeft:40 , rowGap:10 }}>
                        <p className={styles.title}>Feature1</p>
                        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img className={styles.image} src='/src/assets/common/feature2.png'></img>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' , width:450 , marginLeft:40 , rowGap:10 }}>

                        <p className={styles.title}>Feature2</p>
                        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img className={styles.image} src='/src/assets/common/feature3.png'></img>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' , width:450 , marginLeft:40 , rowGap:10 }}>
                        <p className={styles.title}>Feature3</p>
                        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className={styles.frame2}>
                <img className={styles.image} src='/src/assets/common/features.png'></img>
            </div>
        </div>
    )
}

export default Features1