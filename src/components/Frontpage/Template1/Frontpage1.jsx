import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Frontpage1.modules.css"

const FrontPage1 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='container'>
                <div className='header'>
                    <div className='logo'>
                        <img src='src\assets\images\Frontpage\Template1\logo.png'></img>
                    </div>
                    <div className='group'>
                        <div className='item'>
                            <h5 className='label'>Home</h5>
                        </div>
                        <div className='item'>
                            <h5 className='label'>Service</h5>
                        </div>
                        <div className='item'>
                            <h5 className='label'>Feature</h5>
                        </div>
                        <div className='item'>
                            <h5 className='label'>Product</h5>
                        </div>
                        <div className='item'>
                            <h5 className='label'>Testimonial</h5>
                        </div>
                        <div className='item'>
                            <h5 className='label'>FAQ</h5>
                        </div>
                    </div>
                    <div className='login'>
                        <button className='button'>
                            login
                        </button>
                        <button className='button1'>
                            sign up
                        </button>
                    </div>
                </div>



                {/* ///////////// */}



                <div className='home'>
                    <div className='hero-section'>
                        <div className='frame'>
                            <p className='text1'><span style={{ color: '#4D4D4D', margin: 0 }}>Lessons and insights</span><span style={{ color: '#4CAF4F' }}> from 8 years</span></p>
                            <p className='text2'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='button'>Register</button>
                        </div>
                        <div>
                            <img src='src\assets\images\Frontpage\Template1\Illustration.png'></img>
                        </div>
                    </div>
                    <div className='clients'>
                        <div className='description'>
                            <h2 className='title'>Our Clients</h2>
                            <p className='text'>We have been working with some Fortune 500+ clients</p>
                        </div>
                        <div className='logos'>
                            <img className='client-logos-img' src='src\assets\images\Frontpage\Template1\1.png'></img>
                            <img className='client-logos-img' src='src\assets\images\Frontpage\Template1\2.png'></img>
                            <img className='client-logos-img' src='src\assets\images\Frontpage\Template1\3.png'></img>
                            <img className='client-logos-img' src='src\assets\images\Frontpage\Template1\4.png'></img>
                            <img className='client-logos-img' src='src\assets\images\Frontpage\Template1\6.png'></img>
                            <img className='client-logos-img' src='src\assets\images\Frontpage\Template1\7.png'></img>
                        </div>
                    </div>
                    <div className='community'>
                        <div className='description'>
                            <p className='title'>Manage your entire community in a single system</p>
                            <p className='text'>Who is Nextcent suitable for?</p>
                        </div>
                        <div className='frame'>
                            <div className='box'>
                                <div className='member'>
                                    <img className='icon' src='src\assets\images\Frontpage\Template1\8.png'></img>
                                    <p className='title'>Membership <br />Organizations</p>
                                </div>
                                <p className='member-description'>Our membership management software provides full automation of membership renewals and payments</p>
                            </div>
                            <div className='box'>
                                <div className='member'>
                                    <img className='icon' src='src\assets\images\Frontpage\Template1\9.png'></img>
                                    <p className='title'>National <br />Associations</p>
                                </div>
                                <p className='member-description'>Our membership management software provides full automation of membership renewals and payments</p>
                            </div>
                            <div className='box'>
                                <div className='member'>
                                    <img className='icon' src='src\assets\images\Frontpage\Template1\10.png'></img>
                                    <p className='title'>Clubs And<br />Groups</p>
                                </div>
                                <p className='member-description'>Our membership management software provides full automation of membership renewals and payments</p>
                            </div>
                        </div>
                    </div>
                </div>



                {/* ////////// */}



                <div className='body'>
                    <div className='unlock'>
                        <div className='image'>
                            <img className='icon' src='src\assets\images\Frontpage\Template1\15.png'></img>
                        </div>
                        <div className='frame'>
                            <p className='text1'>The unseen of spending three years at Pixelgrade</p>
                            <p className='text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                            <button className='button'>Learn More</button>
                        </div>
                    </div>
                    <div className='achievements'>
                        <div className='heading'>
                            <p className='title'><span style={{ color: '#4D4D4D', margin: 0 }}>Helping a local</span><br /> <span style={{ color: '#4CAF4F' }}>business reinvent itself</span></p>
                            <p className='description'>We reached here with our hard work and dedication</p>
                        </div>
                        <div className='counts'>
                            <div className='row1'>
                                <div className="item">
                                    <img className='icon' src='src\assets\images\Frontpage\Template1\16.png'></img>
                                    <div className="details">
                                        <p className="number">2,245,341</p>
                                        <p className="label">Members</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <img className='icon' src='src\assets\images\Frontpage\Template1\17.png'></img>
                                    <div className="details">
                                        <p className="number">46,328</p>
                                        <p className="label">Clubs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row2">
                                <div className="item">
                                    <img className='icon' src='src\assets\images\Frontpage\Template1\19.png'></img>
                                    <div className="details">
                                        <p className="number">828,867</p>
                                        <p className="label">Event Bookings</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <img className='icon' src='src\assets\images\Frontpage\Template1\18.png'></img>
                                    <div className="details">
                                        <p className="number">1,926,436</p>
                                        <p className="label">Payments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='calender'>
                        <div className='image'>
                            <img className='icon' src='src\assets\images\Frontpage\Template1\20.png'></img>
                        </div>
                        <div className='frame'>
                            <p className='text1'>How to design your site footer like we did</p>
                            <p className='text2'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                            <button className='button'>Learn More</button>
                        </div>
                    </div>
                    <div className='customers'>
                        <div className='image'>
                            <img src='src\assets\images\Frontpage\Template1\21.png'></img>
                        </div>
                        <div className='frame'>
                            <div>
                                <p className='text1'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                                <p className='text2'>Tim Smith</p>
                                <p className='text3'>British Dragon Boat Racing Association</p>
                            </div>
                            <div className='frame1'>
                                <div className='logos'>
                                    <img className='img' src='src\assets\images\Frontpage\Template1\1.png'></img>
                                    <img className='img' src='src\assets\images\Frontpage\Template1\2.png'></img>
                                    <img className='img' src='src\assets\images\Frontpage\Template1\3.png'></img>
                                    <img className='img' src='src\assets\images\Frontpage\Template1\4.png'></img>
                                    <img className='img' src='src\assets\images\Frontpage\Template1\6.png'></img>
                                </div>
                                <button className='button'>Meet all customers
                                    <img className='img' src='src\assets\images\Frontpage\Template1\Right.png' style={{ marginLeft: 10 }}></img>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='community-updates'>
                        <div className='frame'>
                            <p className='heading'>Caring is the new marketing</p>
                            <p className='description'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                        </div>
                        <div className='frame1'>
                            <div className='box'>
                                <img className='img' src='src\assets\images\Frontpage\Template1\22.png'></img>
                                <div className="content">
                                    <p className='text'>Creating Streamlined Safeguarding Processes with OneRen</p>
                                    <button className='button'>Read more
                                        <img src='src\assets\images\Frontpage\Template1\Right.png' style={{ marginLeft: 10 }}></img>
                                    </button>
                                </div>
                            </div>
                            <div className='box'>
                                <img className='img' src='src\assets\images\Frontpage\Template1\23.png'></img>
                                <div className="content">
                                    <p className='text'>What are your safeguarding responsibilities and how can you manage them?</p>
                                    <button className='button'>Read more
                                        <img src='src\assets\images\Frontpage\Template1\Right.png' style={{ marginLeft: 10 }}></img>
                                    </button>
                                </div>
                            </div>
                            <div className='box'>
                                <img className='img' src='src\assets\images\Frontpage\Template1\24.png'></img>
                                <div className="content">
                                    <p className='text'>Revamping the Membership Model with Triathlon Australia</p>
                                    <button className='button'>Read more
                                        <img src='src\assets\images\Frontpage\Template1\Right.png' style={{ marginLeft: 10 }}></img>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* /////////// */}



                <div className='footer'>
                    <div className='footer-frame1'>
                        <p className='footer-text'>Let Nextcent do the work <br />so you don't have to!</p>
                        <button className='footer-button'>Get Demo</button>
                    </div>
                    <div className='footer-frame2'>
                        <div className='company-info'>
                            <div className='logo'>
                                <img src='src\assets\images\Frontpage\Template1\logo1.png'></img>
                            </div>
                            <div className='copyright'>
                                <p className='text'>Copyright © 2020 Nexcent ltd. <br />All rights reserved</p>
                            </div>
                            <div className='social-links'>
                                <a><img className='icon' src='src\assets\images\Frontpage\Template1\11.png'></img></a>
                                <a><img className='icon' src='src\assets\images\Frontpage\Template1\12.png'></img></a>
                                <a><img className='icon' src='src\assets\images\Frontpage\Template1\13.png'></img></a>
                                <a><img className='icon' src='src\assets\images\Frontpage\Template1\14.png'></img></a>
                            </div>
                        </div>
                        <div className='links'>
                            <div className='column'>
                                <a className='title'>Company</a>
                                <a className='item'>About us</a>
                                <a className='item'>Blog</a>
                                <a className='item'>Contact us</a>
                                <a className='item'>Pricing</a>
                                <a className='item'>Testimonials</a>
                            </div>
                            <div className='column'>
                                <a className='title'>Support</a>
                                <a className='item'>Help center</a>
                                <a className='item'>Terms of services</a>
                                <a className='item'>Legal</a>
                                <a className='item'>Privacy policy</a>
                                <a className='item'>Status</a>
                            </div>
                            <div className='column'>
                                <p className='title'>Stay up to date</p>
                                <input type='email' id='email' className='input' placeholder='Your email address'></input>
                                <label htmlFor="email"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontPage1