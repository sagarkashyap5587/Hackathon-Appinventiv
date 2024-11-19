import React from 'react';
import { Link } from 'react-router-dom';
import "../../style/navbar.css"

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <ul>
                    <Link to={'/'} className='nav-link'><li><img className='logo-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSbpWz8SUrRq7EZL-tE73XEN-oSUPFgA3KQ&s' /></li></Link>
                    <Link to={'/income'} className='nav-link'><li>INCOME</li></Link>
                    <Link to={'/income/list'} className='nav-link'><li>INCOME LIST</li></Link>
                    <Link to={'/expenses'} className='nav-link'><li></li></Link><span className='navbar-space'></span>
                    <Link to={'/expenses'} className='nav-link'><li>EXPENSES</li></Link>
                    <Link to={'/expenses/list'} className='nav-link'><li>EXPENSES LIST</li></Link>
                </ul>
            </div>
        </>
    )
}

export default Navbar;