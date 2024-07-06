import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='Q-Tech Logo'/>
        <p>SHOPPER</p>      
      </div>
      <ul className='nav-menu'>
        <li className={currentPath === '/' ? 'active' : ''}>
          <Link style={{textDecoration: 'none'}} to='/'>Shop</Link>
          {currentPath === '/' && <hr />}
        </li>
        <li className={currentPath === '/men' ? 'active' : ''}>
          <Link style={{textDecoration: 'none'}} to='/men'>Men</Link>
          {currentPath === '/men' && <hr />}
        </li>
        <li className={currentPath === '/women' ? 'active' : ''}>
          <Link style={{textDecoration: 'none'}} to='/women'>Women</Link>
          {currentPath === '/women' && <hr />}
        </li>
        <li className={currentPath === '/kids' ? 'active' : ''}>
          <Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>
          {currentPath === '/kids' && <hr />}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link  to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt='Shopping Cart Button'/></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </nav>
  );
}

export default Navbar;