import React from 'react'
import styles from './Feedback1.module.css'

const Feedback1 = () => {
    return (
        <div className={styles.feedback}>
            <div className={styles.frame1}>
                <p className={styles.text1}>“Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! thanks!”</p>
                <div className={styles.frame2}>
                    <img className={styles.image} src='/src/assets/common/user1.png'></img>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}}>
                        <p className={styles.text1}>Johnny Owens</p>
                        <div style={{display:'flex',flexDirection:'row',columnGap:5}}>
                            <img className={styles.image} src='/src/assets/common/star.png'></img>
                            <img className={styles.image} src='/src/assets/common/star.png'></img>
                            <img className={styles.image} src='/src/assets/common/star.png'></img>
                            <img className={styles.image} src='/src/assets/common/star.png'></img>
                            <img className={styles.image} src='/src/assets/common/star.png'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback1