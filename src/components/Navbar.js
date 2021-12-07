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
                    <img src="/logo-ayojogja.png" alt="logo ayojogja" />
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
                    <button onClick={() => setOpen(!open)}>
                        <i class="fa fa-bars"></i>
                    </button>
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
