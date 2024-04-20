import React from 'react'
import styles from './Common.module.css'
import Navbar from './Navbar'
import Hero1 from './Hero1'
import Hero2 from './Hero2'

const Common = () => {
    return (
        <div className={styles.container}>
                <Navbar></Navbar>
                <Hero1></Hero1>
                <Hero2></Hero2>
        </div>
    )
}

export default Common