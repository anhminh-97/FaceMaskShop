import React from 'react'
import Cart from 'Components/Cart'
import NavMenu from './NavMenu.Component'

import './index.less'
import HeaderLogo from './HeaderLogo.Component'
import Navbar from './NavBar.Component'
import MenuMobile from './MenuMobile.Component'

const Header = () => {
  return (
    <div className="header">
      <div className="hidden">
        <NavMenu />
      </div>
      <div className="menu-mobile">
        <MenuMobile />
      </div>
      <HeaderLogo />
      <div className="hidden">
        <Navbar />
      </div>
      <div className="cart-mobile">
        <Cart />
      </div>
    </div>
  )
}

export default Header
