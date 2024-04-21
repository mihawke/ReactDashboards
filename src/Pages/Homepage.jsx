import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Homepage.module.css'

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <p className={styles.title}>Home</p>
            <div  className={styles.frame}>
                <button className={styles.button} onClick={() => navigate('/')}>Go Home</button>
                <button className={styles.button} onClick={() => navigate('/common')}>Common</button>
                <button className={styles.button} onClick={() => navigate('/frontpage1')}>FrontPage1</button>
                <button className={styles.button} onClick={() => navigate('/frontpage2')}>FrontPage2</button>
                <button className={styles.button} onClick={() => navigate('/frontpage3')}>FrontPage3</button>
                <button className={styles.button} onClick={() => navigate('/frontpage4')}>FrontPage4</button>
                <button className={styles.button} onClick={() => navigate('/frontpage5')}>FrontPage5</button>
                <button className={styles.button} onClick={() => navigate('/frontpage6')}>FrontPage6</button>
            </div>
        </div>
    )
}

export default HomePage