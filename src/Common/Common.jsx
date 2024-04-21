import React from 'react'
import styles from './Common.module.css'
import Navbar from './Navbar'
import Hero1 from './Hero1'
import Hero2 from './Hero2'
import Brands from './Brands'
import Features1 from './Features1'
import Features2 from './Features2'
import Feedback1 from './Feedback1'
import Feedback2 from './Feedback2'
import Footer1 from './Footer1'

const Common = () => {
    return (
        <div className={styles.container}>
                <Navbar></Navbar>
                <Hero1></Hero1>
                <Hero2></Hero2>
                <Brands></Brands>
                <Features1></Features1>
                <Features2></Features2>
                <Feedback1></Feedback1>
                <Feedback2></Feedback2>
                <Footer1></Footer1>
        </div>
    )
} 

export default Common