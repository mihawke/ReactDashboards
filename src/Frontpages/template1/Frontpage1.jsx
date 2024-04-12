import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from  "./Frontpage1.module.css"

const FrontPage1 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <img src='src/assets/images/Frontpage/template1/logo.png'></img>
                    </div>
                    <div className={styles.group}>
                        <div className={styles.item}>
                            <h5 className={styles.label}>Home</h5>
                        </div>
                        <div className={styles.item}>
                            <h5 className={styles.label}>Service</h5>
                        </div>
                        <div className={styles.item}>
                            <h5 className={styles.label}>Feature</h5>
                        </div>
                        <div className={styles.item}>
                            <h5 className={styles.label}>Product</h5>
                        </div>
                        <div className={styles.item}>
                            <h5 className={styles.label}>Testimonial</h5>
                        </div>
                        <div className={styles.item}>
                            <h5 className={styles.label}>FAQ</h5>
                        </div>
                    </div>
                    <div className={styles.login}>
                        <button className={styles.button}>
                            login
                        </button>
                        <button className={styles.button1}>
                            sign up
                        </button>
                    </div>
                </div>



                {/* ///////////// */}



                <div className={styles.home}>
                    <div className={styles.heroSection}>
                        <div className={styles.frame}>
                            <p className={styles.text1}><span style={{ color: '#4D4D4D', margin: 0 }}>Lessons and insights</span><span style={{ color: '#4CAF4F' }}> from 8 years</span></p>
                            <p className={styles.text2}>Where to grow your business as a photographer: site or social media?</p>
                            <button className={styles.button}>Register</button>
                        </div>
                        <div>
                            <img src='src/assets/images/Frontpage/template1/Illustration.png'></img>
                        </div>
                    </div>
                    <div className={styles.clients}>
                        <div className={styles.description}>
                            <h2 className={styles.title}>Our Clients</h2>
                            <p className={styles.text}>We have been working with some Fortune 500+ clients</p>
                        </div>
                        <div className={styles.logos}>
                            <img className={styles.img} src='src/assets/images/Frontpage/template1/1.png'></img>
                            <img className={styles.img} src='src/assets/images/Frontpage/template1/2.png'></img>
                            <img className={styles.img} src='src/assets/images/Frontpage/template1/3.png'></img>
                            <img className={styles.img} src='src/assets/images/Frontpage/template1/4.png'></img>
                            <img className={styles.img} src='src/assets/images/Frontpage/template1/6.png'></img>
                            <img className={styles.img} src='src/assets/images/Frontpage/template1/7.png'></img>
                        </div>
                    </div>
                    <div className={styles.community}>
                        <div className={styles.description}>
                            <p className={styles.title}>Manage your entire community in a single system</p>
                            <p className={styles.text}>Who is Nextcent suitable for?</p>
                        </div>
                        <div className={styles.frame}>
                            <div className={styles.box}>
                                <div className={styles.member}>
                                    <img className={styles.icon} src='src/assets/images/Frontpage/template1/8.png'></img>
                                    <p className={styles.title}>Membership <br />Organizations</p>
                                </div>
                                <p className={styles.memberDescription}>Our membership management software provides full automation of membership renewals and payments</p>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.member}>
                                    <img className={styles.icon} src='src/assets/images/Frontpage/template1/9.png'></img>
                                    <p className={styles.title}>National <br />Associations</p>
                                </div>
                                <p className={styles.memberDescription}>Our membership management software provides full automation of membership renewals and payments</p>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.member}>
                                    <img className={styles.icon} src='src/assets/images/Frontpage/template1/10.png'></img>
                                    <p className={styles.title}>Clubs And<br />Groups</p>
                                </div>
                                <p className={styles.memberDescription}>Our membership management software provides full automation of membership renewals and payments</p>
                            </div>
                        </div>
                    </div>
                </div>



                {/* ////////// */}



                <div className={styles.body}>
                    <div className={styles.unlock}>
                        <div className={styles.image}>
                            <img className={styles.icon} src='src/assets/images/Frontpage/template1/15.png'></img>
                        </div>
                        <div className={styles.frame}>
                            <p className={styles.text1}>The unseen of spending three years at Pixelgrade</p>
                            <p className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                            <button className={styles.button}>Learn More</button>
                        </div>
                    </div>
                    <div className={styles.achievements}>
                        <div className={styles.heading}>
                            <p className={styles.title}><span style={{ color: '#4D4D4D', margin: 0 }}>Helping a local</span><br /> <span style={{ color: '#4CAF4F' }}>business reinvent itself</span></p>
                            <p className={styles.description}>We reached here with our hard work and dedication</p>
                        </div>
                        <div className={styles.counts}>
                            <div className={styles.row1}>
                                <div className={styles.item}>
                                    <img className={styles.icon} src='src/assets/images/Frontpage/template1/16.png'></img>
                                    <div className={styles.details}>
                                        <p className={styles.number}>2,245,341</p>
                                        <p className={styles.label}>Members</p>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <img className={styles.icon} src='src/assets/images/Frontpage/template1/17.png'></img>
                                    <div className={styles.details}>
                                        <p className={styles.number}>46,328</p>
                                        <p className={styles.label}>Clubs</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.row2}>
                                <div className={styles.item}>
                                    <img className={styles.icon} src='src/assets/images/Frontpage/template1/19.png'></img>
                                    <div className={styles.details}>
                                        <p className={styles.number}>828,867</p>
                                        <p className={styles.label}>Event Bookings</p>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <img className={styles.icon} src='src/assets/images/Frontpage/template1/18.png'></img>
                                    <div className={styles.details}>
                                        <p className={styles.number}>1,926,436</p>
                                        <p className={styles.label}>Payments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.calender}>
                        <div className={styles.image}>
                            <img className={styles.icon} src='src/assets/images/Frontpage/template1/20.png'></img>
                        </div>
                        <div className={styles.frame}>
                            <p className={styles.text1}>How to design your site footer like we did</p>
                            <p className={styles.text2}>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                            <button className={styles.button}>Learn More</button>
                        </div>
                    </div>
                    <div className={styles.customers}>
                        <div className={styles.image}>
                            <img src='src/assets/images/Frontpage/template1/21.png'></img>
                        </div>
                        <div className={styles.frame}>
                            <div>
                                <p className={styles.text1}>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                                <p className={styles.text2}>Tim Smith</p>
                                <p className={styles.text3}>British Dragon Boat Racing Association</p>
                            </div>
                            <div className={styles.frame1}>
                                <div className={styles.logos}>
                                    <img className={styles.img} src='src/assets/images/Frontpage/template1/1.png'></img>
                                    <img className={styles.img} src='src/assets/images/Frontpage/template1/2.png'></img>
                                    <img className={styles.img} src='src/assets/images/Frontpage/template1/3.png'></img>
                                    <img className={styles.img} src='src/assets/images/Frontpage/template1/4.png'></img>
                                    <img className={styles.img} src='src/assets/images/Frontpage/template1/6.png'></img>
                                </div>
                                <button className={styles.button}>Meet all customers
                                    <img className={styles.img} src='src/assets/images/Frontpage/template1/Right.png' style={{ marginLeft: 10 }}></img>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.communityUpdates}>
                        <div className={styles.frame}>
                            <p className={styles.heading}>Caring is the new marketing</p>
                            <p className={styles.description}>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                        </div>
                        <div className={styles.frame1}>
                            <div className={styles.box}>
                                <img className={styles.img} src='src/assets/images/Frontpage/template1/22.png'></img>
                                <div className={styles.content}>
                                    <p className={styles.text}>Creating Streamlined Safeguarding Processes with OneRen</p>
                                    <button className={styles.button}>Read more
                                        <img src='src/assets/images/Frontpage/template1/Right.png' style={{ marginLeft: 10 }}></img>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <img className={styles.img} src='src/assets/images/Frontpage/template1/23.png'></img>
                                <div className={styles.content}>
                                    <p className={styles.text}>What are your safeguarding responsibilities and how can you manage them?</p>
                                    <button className={styles.button}>Read more
                                        <img src='src/assets/images/Frontpage/template1/Right.png' style={{ marginLeft: 10 }}></img>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <img className={styles.img} src='src/assets/images/Frontpage/template1/24.png'></img>
                                <div className={styles.content}>
                                    <p className={styles.text}>Revamping the Membership Model with Triathlon Australia</p>
                                    <button className={styles.button}>Read more
                                        <img src='src/assets/images/Frontpage/template1/Right.png' style={{ marginLeft: 10 }}></img>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* /////////// */}



                <div className={styles.footer}>
                    <div className={styles.frame1}>
                        <p className={styles.text}>Let Nextcent do the work <br />so you don't have to!</p>
                        <button className={styles.button}>Get Demo</button>
                    </div>
                    <div className={styles.frame2}>
                        <div className={styles.info}>
                            <div className={styles.logo}>
                                <img src='src/assets/images/Frontpage/template1/logo1.png'></img>
                            </div>
                            <div className={styles.copyright}>
                                <p className={styles.text}>Copyright © 2020 Nexcent ltd. <br />All rights reserved</p>
                            </div>
                            <div className={styles.socials}>
                                <a><img className={styles.icon} src='src/assets/images/Frontpage/template1/11.png'></img></a>
                                <a><img className={styles.icon} src='src/assets/images/Frontpage/template1/12.png'></img></a>
                                <a><img className={styles.icon} src='src/assets/images/Frontpage/template1/13.png'></img></a>
                                <a><img className={styles.icon} src='src/assets/images/Frontpage/template1/14.png'></img></a>
                            </div>
                        </div>
                        <div className={styles.links}>
                            <div className={styles.column}>
                                <a className={styles.title}>Company</a>
                                <a className={styles.item}>About us</a>
                                <a className={styles.item}>Blog</a>
                                <a className={styles.item}>Contact us</a>
                                <a className={styles.item}>Pricing</a>
                                <a className={styles.item}>Testimonials</a>
                            </div>
                            <div className={styles.column}>
                                <a className={styles.title}>Support</a>
                                <a className={styles.item}>Help center</a>
                                <a className={styles.item}>Terms of services</a>
                                <a className={styles.item}>Legal</a>
                                <a className={styles.item}>Privacy policy</a>
                                <a className={styles.item}>Status</a>
                            </div>
                            <div className={styles.column}>
                                <p className={styles.title}>Stay up to date</p>
                                <input type='email' id='email' className={styles.input} placeholder='Your email address'></input>
                                <label htmlFor="email"></label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.credit}>
                        Design By : @itsmuntasirb
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontPage1