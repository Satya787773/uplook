import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className='site-header py-4 bglight'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <Link to='/'><img src={require('../images/logo.png')} /></Link>
                        </div>
                        <div className='col-9 d-flex align-items-center justify-content-end'>
                            <nav className="navbar navbar-expand-lg d-block p-0">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item pr-5">
                                            <Link className="nav-link p-0" to='/Courses'>Courses</Link>
                                        </li>
                                        <li className="nav-item pr-5">
                                            <Link className="nav-link p-0" to='/Careers'>Careers</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div className='header-right d-flex align-items-center justify-content-end'>
                                <Link className="btn mr-4" to=''>Enroll</Link>
                                <Link className="user-info" to='/'><img src={require('../images/user-icon.png')} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
