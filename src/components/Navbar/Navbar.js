import React from 'react'
import cryptoLogo from '../../assets/Group 33648.png'
import searchIcon from '../../assets/Vector.png'
import hamburgerMenu from '../../assets/Frame.png'
import './Navbar.css'
const Navbar = () => {
  return (
<nav className='navbar'>

<img src={cryptoLogo} alt="navbar-logo" width='18' />
<h5>Crypto Tracker</h5>
<img src={searchIcon} alt="search-icon" width='18' />
<img src={hamburgerMenu} alt="hamburger-menu" width='18' />
</nav>
 )
}

export default Navbar ;