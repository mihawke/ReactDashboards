import React from 'react'
import styles from './Brands.module.css'

const Brands = () => {
    return (
        <div className={styles.brands}>
            <div className={styles.frame1}>
                <div className={styles.line}></div>
                <img className={styles.image} src='/src/assets/common/Brands.png'></img>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}

export default Brands