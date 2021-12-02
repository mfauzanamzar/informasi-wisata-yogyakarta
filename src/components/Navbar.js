import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <div className="navbar__logo">
                    <h1>Logo</h1>
                </div>
                <ul className="navbar__lists">
                    <li><a>Home</a></li>
                    <li><a href="">Wisata</a></li>
                    <li><a href="">Peta</a></li>
                </ul>
                <div className="navbar-mobile">
                    <i class="fa fa-bars"></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
