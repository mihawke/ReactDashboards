import React from 'react'
import styles from './Feedback2.module.css'

const Feedback2 = () => {
    return (
        <div className={styles.feedback}>
            <div className={styles.frame1}>
                <img className={styles.image} src='/src/assets/common/quote.png'></img>
                <p className={styles.text1}>“Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! thanks!”</p>
                <p className={styles.text2}>Johnny Owens</p>
            </div>
        </div>
    )
}

export default Feedback2