import React from 'react'
import styles from './Frontpage4.module.css'


const FrontPage4 = () => {
    return (
        <div className={styles.container}>

            <div className={styles.hero}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        PixelForge.io
                    </div>
                    <div className={styles.navbar}>
                        <div className={styles.item}>Demos</div>
                        <div className={styles.item}>Pages</div>
                        <div className={styles.item}>Support</div>
                        <div className={styles.item}>Contact</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <button className={styles.login}>
                            Login
                        </button>
                        <button className={styles.signup}>
                            Signup
                        </button>
                    </div>
                </div>
                <div className={styles.frame}>
                    <div className={styles.content}>
                        <p className={styles.text1}>LET’S SHIFT YOUR BUSINESS</p>
                        <p className={styles.text2}>Shift your business fast with Shade Pro.</p>
                        <p className={styles.text3}>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
                        <button className={styles.button}>Get started</button>
                    </div>
                    <img src='src/assets/images/template4/hero.png' />
                </div>
            </div>
            <div className={styles.services}>
                <p className={styles.text1}>OUR SERVICES</p>
                <p className={styles.text2}>We provide great services for our customers based on needs</p>
                <div className={styles.frame}>
                    <div className={styles.card}
                        style={{ backgroundColor: '#68D585' }}
                    >
                        <img src='src/assets/images/template4/graphicDesign.png' />
                        <p className={styles.text1}>Graphic Design</p>
                        <p className={styles.text2}>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                        <button className={styles.button}>Learn more</button>
                    </div>
                    <div className={styles.card}
                        style={{ backgroundColor: '#473BF0' }}
                    >
                        <img src='src/assets/images/template4/webDev.png' />
                        <p className={styles.text1}>Graphic Design</p>
                        <p className={styles.text2}>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                        <button className={styles.button}>Learn more</button>
                    </div>
                    <div className={styles.card}
                        style={{ backgroundColor: '#F64B4B' }}
                    >
                        <img src='src/assets/images/template4/contentWriting.png' />
                        <p className={styles.text1}>Graphic Design</p>
                        <p className={styles.text2}>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                        <button className={styles.button}>Learn more</button>
                    </div>
                </div>
            </div>
            <div className={styles.testimonial}>

            </div>
            <div className={styles.about}>

            </div>
            <div className={styles.facts}>
                <div className={styles.frame}>
                    <p className={styles.text1}>1M+</p>
                    <p className={styles.text2}>Customers visit Omega every month to get their service done.</p>
                </div>
                <div className={styles.frame}>
                    <p className={styles.text1}>92%</p>
                    <p className={styles.text2}>Satisfaction rate comes from our awesome customers.</p>
                </div>
                <div className={styles.frame}>
                    <p className={styles.text1}>4.9/5.0</p>
                    <p className={styles.text2}>Average customer ratings we have got all over internet.</p>
                </div>
            </div>
            <div className={styles.features}>
                <p className={styles.text1}>WHY CHOOSE US</p>
                <p className={styles.text2}>People choose us because we serve the best for everyone</p>
                <div className={styles.frame}>
                    <div className={styles.frame2}>
                        <div className={styles.card}>
                            <img src='src/assets/images/template4/features1.png' style={{ paddingTop: 6 }} />
                            <div>
                                <p className={styles.text1}>Dedicated project manager</p>
                                <p className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim elit risus.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src='src/assets/images/template4/features3.png' style={{ paddingTop: 6 }} />
                            <div>
                                <p className={styles.text1}>Easy feedback sharing</p>
                                <p className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim elit risus.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.frame2}>
                        <div className={styles.card}>
                            <img src='src/assets/images/template4/features2.png' style={{ paddingTop: 6 }} />
                            <div>
                                <p className={styles.text1}>Organized tasks</p>
                                <p className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim elit risus.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src='src/assets/images/template4/features4.png' style={{ paddingTop: 6 }} />
                            <div>
                                <p className={styles.text1}>Never miss deadline</p>
                                <p className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim elit risus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: '70%', height: 1, backgroundColor: '#D8D8D8', margin: 100 }}></div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <div className={styles.frame3}>
                        <p className={styles.text1}>Ready to launch your next project?</p>
                        <p className={styles.text2}>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>

                    </div>
                    <button className={styles.button}>Get started</button>
                </div>
            </div>
            <div className={styles.works}>
                <p className={styles.text1}>CASE STUDIES</p>
                <p className={styles.text2}>Our works describe why we are the best in the business</p>
                <div className={styles.frame}>
                    <div className={styles.frame2}>
                        <div className={styles.card}>
                            <img src='src/assets/images/template4/work1.png' style={{ paddingTop: 6 }} />
                            <div>
                                <p className={styles.text2}>Graphic Design</p>
                                <p className={styles.text1}>Aura Branding Design</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src='src/assets/images/template4/work2.png' style={{ paddingTop: 6 }} />
                            <div>
                                <p className={styles.text2}>Web Development</p>
                                <p className={styles.text1}>Gradient Website Development</p>

                            </div>
                        </div>
                    </div>
                    <div className={styles.frame2}>
                        <div className={styles.card}>
                            <img src='src/assets/images/template4/work3.png' style={{ paddingTop: 6 }} />
                            <div>
                                <p className={styles.text2}>Graphic Design</p>
                                <p className={styles.text1}>AB.S Snack Packaging</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src='src/assets/images/template4/work4.png' style={{ paddingTop: 6 }} />
                            <div>
                                <p className={styles.text2}>Content Writing</p>
                                <p className={styles.text1}>Magazine Content Writing</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={styles.button}>
                    See all works
                    <img src='src/assets/images/template4/work4.png' style={{ paddingTop: 6 }} />
                </button>
            </div>
            <div className={styles.testimonial}>

            </div>
            <div className={styles.footer}>

            </div>
        </div >
    )
}

export default FrontPage4