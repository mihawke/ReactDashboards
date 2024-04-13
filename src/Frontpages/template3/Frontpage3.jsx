import React from 'react'
import styles from './Frontpage3.module.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";


const FrontPage3 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img className={styles.image} src='/src/assets/images/Frontpage/template3/logo.png'></img>
                </div>
                <div className={styles.location}>
                    <div>
                        <p className={styles.text1}>Deliver to:</p>
                    </div>
                    <button className={styles.button}><FaLocationDot className={styles.item} size={22} /></button>
                    <p className={styles.text2}>Current Location <span className={styles.text3}>Lorem ipsum </span></p>
                </div>
                <div className={styles.login}>
                    <button className={styles.button}>
                        <FaSearch className={styles.icon} size={20} />
                        Search Food
                    </button>
                    <button className={styles.button1}>
                        <FaUser className={styles.icon} size={22} />
                        login
                    </button>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.banner}>
                    <div className={styles.title}>
                        <h1 className={styles.text1}>Are you starving?</h1>
                        <p className={styles.text2}>Within a few clicks, find meals that are accessible near you</p>
                    </div>
                    <div className={styles.order}>
                        <div className={styles.top}>
                            <button className={styles.tab1}><FaMotorcycle className={styles.item} size={22} />Delivery</button>
                            <button className={styles.tab2}><FaShoppingBag className={styles.item} size={15} />Pickup</button>
                        </div>
                        <div className={styles.line}>

                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.inputField}>
                                <button className={styles.icon}><FaLocationDot className={styles.item} size={18} /></button>
                                <input className={styles.input} type='text' placeholder='Enter your address'></input>
                            </div>
                            <button className={styles.button}>
                                <FaSearch className={styles.icon} size={12} />
                                Find Food
                            </button>
                        </div>
                    </div>
                </div>
                <img className={styles.image} src='/src/assets/images/Frontpage/template3/imageBase.png'></img>
            </div>
            <div className={styles.search}>
                <div className={styles.food}>
                    <div className={styles.header}>
                        <p className={styles.title}>Search by food</p>
                        <div className={styles.arrows}>
                            <button className={styles.button1}>
                                <p className={styles.text}>View All</p><FaAngleRight className={styles.icon} size={15} />
                            </button>
                            <button className={styles.button}><FaAngleLeft className={styles.icon} size={20} /></button>
                            <button className={styles.button}><FaAngleRight className={styles.icon} size={20} /></button>
                        </div>
                    </div>
                    <div className={styles.frame}>
                        <div className={styles.item}>
                            <img className={styles.image} src='/src/assets/images/Frontpage/template3/f1.png'></img>
                            <p className={styles.name}>Pizza</p>
                        </div>
                        <div className={styles.item}>
                            <img className={styles.image} src='/src/assets/images/Frontpage/template3/f2.png'></img>
                            <p className={styles.name}>Burger</p>
                        </div>
                        <div className={styles.item}>
                            <img className={styles.image} src='/src/assets/images/Frontpage/template3/f3.png'></img>
                            <p className={styles.name}>Noodles</p>
                        </div>
                        <div className={styles.item}>
                            <img className={styles.image} src='/src/assets/images/Frontpage/template3/f4.png'></img>
                            <p className={styles.name}>Sub-Sandwich</p>
                        </div>
                        <div className={styles.item}>
                            <img className={styles.image} src='/src/assets/images/Frontpage/template3/f5.png'></img>
                            <p className={styles.name}>Chowmein</p>
                        </div>
                        <div className={styles.item}>
                            <img className={styles.image} src='/src/assets/images/Frontpage/template3/f6.png'></img>
                            <p className={styles.name}>Steak</p>
                        </div>
                    </div>
                </div>
                <div className={styles.features}>
                    <div className={styles.box}>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <img className={styles.image} src='/src/assets/images/Frontpage/template3/discount.png'></img>
                            </div>
                            <p className={styles.text}>Daily<br />Discounts</p>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <img className={styles.image} src='/src/assets/images/Frontpage/template3/trace.png'></img>
                            </div>
                            <div>
                                <p className={styles.text}>Live<br />Tracing</p>
                            </div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <img className={styles.image} src='/src/assets/images/Frontpage/template3/quick.png'></img>
                            </div>
                            <p className={styles.text}>Quick<br />Delivery</p>
                        </div>
                    </div>
                </div>
                <div className={styles.app}>

                </div>
            </div>
            <div className={styles.cta}>
                <h1 className={styles.text1}>Are you ready to order with the best deals?</h1>
                <button className={styles.button}>PROCEED TO ORDER</button>
            </div>
            <div className={styles.footer}>
                <div className={styles.bottom}>
                    <div className={styles.links}>
                        <div className={styles.column}>
                            <a className={styles.title}>Company</a>
                            <a className={styles.item}>About us</a>
                            <a className={styles.item}>Teams</a>
                            <a className={styles.item}>Careers</a>
                            <a className={styles.item}>Blog</a>
                        </div>
                        <div className={styles.column}>
                            <a className={styles.title}>Contact</a>
                            <a className={styles.item}>Help & Support</a>
                            <a className={styles.item}>Partner with us</a>
                            <a className={styles.item}>Ride with us</a>
                        </div>
                        <div className={styles.column}>
                            <a className={styles.title}>Legal</a>
                            <a className={styles.item}>Terms & Conditions</a>
                            <a className={styles.item}>Refund & Cancellation</a>
                            <a className={styles.item}>Privacy policy</a>
                            <a className={styles.item}>Cookie Policy</a>
                        </div>
                    </div>
                    <div className={styles.subscription}>
                        <p className={styles.text}>Follow us</p>
                        <div className={styles.socials}>
                            <a><FaInstagram className={styles.icon} size={20} /></a>
                            <a><FaFacebookF className={styles.icon} size={20} /></a>
                            <a><FaTwitter className={styles.icon} size={20} /></a>
                            <a><FaYoutube className={styles.icon} size={20} /></a>
                        </div>
                        <p className={styles.text}>Receive exclusive offers in your mailbox</p>
                        <div className={styles.subscribe}>
                            <div className={styles.inputField}>
                                <button className={styles.icon}><FaEnvelope className={styles.item} size={18} /></button>
                                <input className={styles.input} type='text' placeholder='Enter your address'></input>
                            </div>
                            <button className={styles.button}>
                                Subscribe
                            </button>
                        </div>
                    </div>


                </div>
                <div className={styles.rights}>
                    <div className={styles.line}></div>
                    <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: "row" }}>
                            <p className={styles.text1}>All rights Reserved</p><p className={styles.text2}>© Your Company , 2021</p>
                        </div>
                        <p className={styles.text2}>Design Credit : @themewagon</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FrontPage3