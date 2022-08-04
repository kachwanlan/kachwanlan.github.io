import React from 'react';
import { signInWithGoogle } from '../../../utils/firebase';
// import { Link } from 'react-router-dom';
import './Header.css';
import './images/amazonlogo1.webp'

function Header({cartItems}) {
  return (
    <header className='header'>
        <div>            
                <a href='/' className="logo"><img  className="header-logo" src='./images/amazonlogo1.webp' alt='amazon logo'/></a>             
              
        </div>
          <div className='header-links'>
              <ul>
                  <li>
                      <a href='/'>Home</a>
                  </li>
              </ul>
               <ul>
                  <li>
                      <a onClick={signInWithGoogle}>Signup</a>
                  </li>
              </ul>
               <ul>
                  <li>
                      <a href='/cart' className='cart'>                          
                          <i class='fas fa-shopping-cart' />
                          <span className='cart-length'>{ cartItems.length === 0 ? "" : cartItems.length }</span>
                      </a>
                  </li>
              </ul>
          </div>
    </header>
  )
}

export default Header