import React from 'react'
import styles from './Frontpage2.module.css'
import { RiAccountCircleLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { RiHeartLine } from "react-icons/ri";


const FrontPage2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src='/src/assets/images/template2/logo.png'></img>
                </div>
                <div className={styles.menu}>
                    <button className={styles.button} onClick={() => navigate('/frontpage2/home')}>Home</button>
                    <button className={styles.button} onClick={() => navigate('/frontpage2/shop')}>Shop</button>
                    <button className={styles.button} onClick={() => navigate('/frontpage2/about')}>About</button>
                    <button className={styles.button} onClick={() => navigate('/frontpage2/contact')}>Contact</button>
                </div>
                <div className={styles.icons}>
                    <button className={styles.button}><RiAccountCircleLine className={styles.item} /></button>
                    <button className={styles.button}><IoSearchOutline className={styles.item} /></button>
                    <button className={styles.button}><RiHeartLine className={styles.item} /></button>
                    <button className={styles.button}><IoCartOutline className={styles.item} /></button>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.banner}>
                    <p className={styles.text1}>New Arrival</p>
                    <p className={styles.text2}>Discover Our New Collection</p>
                    <p className={styles.text3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <button className={styles.btn}>BUY NOW</button>
                </div>
            </div>
            <div className={styles.browse}>
                <div className={styles.heading}>
                    <p className={styles.text1}>Browse The Range</p>
                    <p className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={styles.options}>
                    <div className={styles.item}>
                        <img className={styles.image} id='dining' src='/src/assets/images/template2/dining.png'></img>
                        <label className={styles.label} htmlFor='dining'>Dining</label>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} id='living' src='/src/assets/images/template2/living.png'></img>
                        <label className={styles.label} htmlFor='living'>Living</label>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} id='bedroom' src='/src/assets/images/template2/bedroom.png'></img>
                        <label className={styles.label} htmlFor='bedroom'>Bedroom</label>
                    </div>
                </div>
            </div>
            <div className={styles.products}>
                <p className={styles.heading}>Our Products</p>
                <div className={styles.itemContainer}>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/template2/prod1.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Syltherine</p>
                            <p className={styles.details}>Stylish cafe chair</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/template2/prod2.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Leviosa</p>
                            <p className={styles.details}>Stylish cafe chair</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/template2/prod3.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Lolito</p>
                            <p className={styles.details}>Luxury big sofa</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/template2/prod4.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Respira</p>
                            <p className={styles.details}>Outdoor bar table and stool</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/template2/prod1.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Syltherine</p>
                            <p className={styles.details}>Stylish cafe chair</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/template2/prod2.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Leviosa</p>
                            <p className={styles.details}>Stylish cafe chair</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/template2/prod3.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Lolito</p>
                            <p className={styles.details}>Luxury big sofa</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/template2/prod4.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Respira</p>
                            <p className={styles.details}>Outdoor bar table and stool</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                </div>
                <button className={styles.button}>
                    Show More
                </button>
            </div>
            <div className={styles.inspirations}>
                <div className={styles.heading}>
                    <p className={styles.text1}>50+ Beautiful rooms inspiration</p>
                    <p className={styles.text2}>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                    <button className={styles.button}>Explore More</button>
                </div>
                <div className={styles.options}>
                    <img className={styles.image} src='/src/assets/images/template2/insp1.png'></img>
                    <img className={styles.image} src='/src/assets/images/template2/insp1.png'></img>
                    <img className={styles.image} src='/src/assets/images/template2/insp1.png'></img>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.frame1}>
                    <div className={styles.info}>
                        <div className={styles.logo}>
                            <img src='/src/assets/images/template2/logo.png'></img>
                        </div>
                        <div className={styles.copyright}>
                            <p className={styles.text}>400 University Drive Suite 200 Coral Gables, <br />FL 33134 USA</p>
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
                            <p className={styles.title}>Newsletter</p>
                            <input type='email' id='email' className={styles.input} placeholder='Your email address'></input>
                            <label htmlFor="email"></label>
                        </div>
                    </div>
                </div>
                <div className={styles.credit}>
                    Design By : @uiux_expert
                </div>
            </div>
        </div >
    )
}

export default FrontPage2