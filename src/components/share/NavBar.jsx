import React from 'react'
import { Link } from 'react-router-dom'
import './style/navbar.css'

const NavBar = () => {
    return (
        <header className='navbar'>
            <h1 className='navbar__title'><Link to={'/'} >E-commers</Link></h1>
            <ul className='navbar__lis' >
                <li className='navbar__item'><Link to={'/login'} > 🤵🏻‍♀️ Login</Link></li>
                <li className='navbar__item'><Link to={'/purchases'} > 📦 Purchases</Link></li>
                <li className='navbar__item'><Link to={'/cart'} > 🛒 Cart</Link></li>
            </ul>
        </header>
    )
}

export default NavBar