import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <nav>
            <div className="navbar">
                <div className="navbar__logo">
                    <h1>Logo</h1>
                </div>
                <ul className="navbar__lists nav-hidden">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/wisata">
                        <li>Wisata</li>
                    </Link>
                    <Link to="/Maps">
                        <li>Maps</li>
                    </Link>
                </ul>
                <div className="navbar-mobile">
                    <a href="#" onClick={() => setOpen(!open)}>
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
            </div>
            {open &&
                <div className="dropdown">
                    <ul className="navbar__lists">
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/wisata">
                            <li>Wisata</li>
                        </Link>
                        <Link to="/Maps">
                            <li>Maps</li>
                        </Link>
                    </ul>
                </div>
            }
        </nav>
    )
}

export default Navbar
