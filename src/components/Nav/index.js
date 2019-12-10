import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Logo from '../../assets/images/logo-branco.png'

import './style.css'

function Nav () {
  return (
    <nav className='navbar'>
      <div>
        <Link to='/'>
          {' '}
          <img
            className='navbar-logo'
            src={Logo}
            alt='Logotipo Gifs Fofos'
          />
        </Link>
      </div>
      <Menu />
    </nav>
  )
}

export default Nav
