import React from 'react'
import styles from "./Shop.module.css";
import { useNavigate } from 'react-router-dom'
import { RiAccountCircleLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { RiHeartLine } from "react-icons/ri";


const FrontPage2Shop = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src='/src/assets/images/Frontpage/template2/logo.png'></img>
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
                <p className={styles.text1}>Shop</p>
                <p className={styles.text2}><span>Home </span> <span>{'>'}</span> <span className={styles.text3}>Shop</span></p>
            </div>
            <div className={styles.filter}>
                <div className={styles.group1}>

                </div>
                <div className={styles.group2}>
                    <div className={styles.box}>
                        <label className={styles.label}>Show</label>
                        <input className={styles.input} type='number' placeholder='16'></input>
                    </div>
                    <div className={styles.box}>
                        <label className={styles.label}>Sort By</label>
                        <input className={styles.input1} type='text' placeholder='Default'></input>
                    </div>
                </div>
            </div>
            <div className={styles.products}>
                <div className={styles.itemContainer}>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/Frontpage/template2/shop/prod1.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Syltherine</p>
                            <p className={styles.details}>Stylish cafe chair</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/Frontpage/template2/shop/prod2.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Leviosa</p>
                            <p className={styles.details}>Stylish cafe chair</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/Frontpage/template2/shop/prod3.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Lolito</p>
                            <p className={styles.details}>Luxury big sofa</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/Frontpage/template2/shop/prod4.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Respira</p>
                            <p className={styles.details}>Outdoor bar table and stool</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/Frontpage/template2/shop/prod1.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Syltherine</p>
                            <p className={styles.details}>Stylish cafe chair</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/Frontpage/template2/shop/prod2.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Leviosa</p>
                            <p className={styles.details}>Stylish cafe chair</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/Frontpage/template2/shop/prod3.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Lolito</p>
                            <p className={styles.details}>Luxury big sofa</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/Frontpage/template2/shop/prod4.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Respira</p>
                            <p className={styles.details}>Outdoor bar table and stool</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/Frontpage/template2/shop/prod1.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Syltherine</p>
                            <p className={styles.details}>Stylish cafe chair</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/Frontpage/template2/shop/prod2.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Leviosa</p>
                            <p className={styles.details}>Stylish cafe chair</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/Frontpage/template2/shop/prod3.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Lolito</p>
                            <p className={styles.details}>Luxury big sofa</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/Frontpage/template2/shop/prod4.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Respira</p>
                            <p className={styles.details}>Outdoor bar table and stool</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/Frontpage/template2/shop/prod1.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Syltherine</p>
                            <p className={styles.details}>Stylish cafe chair</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/Frontpage/template2/shop/prod2.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Leviosa</p>
                            <p className={styles.details}>Stylish cafe chair</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/Frontpage/template2/shop/prod3.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Lolito</p>
                            <p className={styles.details}>Luxury big sofa</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.image} src='/src/assets/images/Frontpage/template2/shop/prod4.png'></img>
                        <div className={styles.description}>
                            <p className={styles.name}>Respira</p>
                            <p className={styles.details}>Outdoor bar table and stool</p>
                            <p className={styles.price}>Rs.2,500.00</p>
                        </div>
                    </div>
                </div>
                <div className={styles.pages}>
                    <button className={styles.button}>
                        1
                    </button>
                    <button className={styles.button1}>
                        2
                    </button>
                    <button className={styles.button1}>
                        3
                    </button>
                    <button className={styles.button1}>
                        Next
                    </button>
                </div>
            </div>
            <div className={styles.warranty}>
            </div>
            <div className={styles.footer}>
                <div className={styles.frame1}>
                    <div className={styles.info}>
                        <div className={styles.logo}>
                            <img src='/src/assets/images/Frontpage/template2/logo.png'></img>
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

export default FrontPage2Shop