import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
            <footer className='site-footer py-5'>
                <div className='container'>
                    <div className='row justify-content-between align-items-end'>
                        <div className='col-md-3'>
                            <Link to='/'><img src={require('../images/logo.png')} /></Link>
                            <ul className='d-flex pt-5 pb-4 social-icon'>
                                <li className='pr-2'><Link to='https://www.youtube.com/' target='blank'><img src={require('../images/youtube.png')} /></Link></li>
                                <li className='pr-2'><Link to='https://www.facebook.com/' target='blank'><img src={require('../images/facebook.png')} /></Link></li>
                                <li className='pr-2'><Link to='https://www.instagram.com/' target='blank'><img src={require('../images/insta.png')} /></Link></li>
                                <li className='pr-2'><Link to='https://www.linkedin.com/' target='blank'><img src={require('../images/linkdin.png')} /></Link></li>

                            </ul>
                            <p className='inter'>©2024 All Rights Reserved.</p>
                        </div>

                        <div className='col-md-4 footer-menu'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h5 className='text-uppercase'>ABOUT</h5>
                                    <ul>
                                        <li><Link to=''>Careers</Link></li>
                                        <li><Link to=''>Terms and  Condition</Link></li>
                                        <li><Link to=''>Refund Policy</Link></li>
                                        <li><Link to=''>Your privacy Choices</Link></li>
                                    </ul>
                                </div>
                                <div className='col-md-6'>
                                    <h5 className='text-uppercase'>ENROLL</h5>
                                    <ul>
                                        <li><Link to=''>Courses</Link></li>
                                        <li><Link to=''>Subscribe</Link></li>
                                        <li><Link to=''>Support</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
