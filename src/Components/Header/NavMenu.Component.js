import { Dropdown, Menu } from 'Components/UI-Library'
import { ROUTER } from 'Constants/CommonConstants'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'
import './NavMenu.Style.less'

const NavMenu = () => {
  const { t } = useTranslation(['header'])
  return (
    <div className="nav-menu">
      <div className="menu-item">
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item>
                <Link to={ROUTER.Shop}>{t('Shop All')}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/adults">{t('adults')}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/kids">{t('kids')}</Link>
              </Menu.Item>
            </Menu>
          }
        >
          <Link
            className="nav-item ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
            to=""
          >
            {t('shop')}
          </Link>
        </Dropdown>
      </div>
      <div className="menu-item">
        <NavLink className="nav-item" to={ROUTER.FAQ}>
          {t('faq')}
        </NavLink>
      </div>
      <div className="menu-item">
        <NavLink className="nav-item" to={ROUTER.Contact}>
          {t('contact')}
        </NavLink>
      </div>
    </div>
  )
}

export default NavMenu
