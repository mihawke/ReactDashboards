import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.frame1}>
                <div className={styles.logo}>
                    Logo
                </div>
            </div>
            <div className={styles.frame2}>
                <div className={styles.menu}>
                    <div className={styles.item}>Menu1</div>
                    <div className={styles.item}>Menu2</div>
                    <div className={styles.item}>Menu3</div>
                    <div className={styles.item}>Menu4</div>
                    <div className={styles.item}>Menu5</div>
                </div>
            </div>
            <div className={styles.frame3}>
                <div className={styles.button}>
                    Button1
                </div>
                <div className={styles.button}>
                    Button2
                </div>
            </div>
        </div>
    )
}

export default Navbar