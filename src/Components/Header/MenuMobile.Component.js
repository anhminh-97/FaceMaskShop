import React, { useState } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { Link } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'

import { Button, Drawer, Menu, Avatar } from 'Components/UI-Library'
import {
  CloseOutlined,
  LogoutOutlined,
  MenuOutlined,
  ProfileOutlined,
  UserOutlined,
} from 'Components/UI-Library/Icons'
import { ROUTER } from 'Constants/CommonConstants'
import './MenuMobile.Style.less'
import SearchBar from './SearchBar.Component'

const { SubMenu } = Menu

const MenuMobile = () => {
  const user = useStoreState((state) => state.auth.user)
  const removeUser = useStoreActions((actions) => actions.auth.removeUser)
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  const handleClick = (e) => {
    console.log(`click`, e)
  }
  const handleLogout = () => {
    removeUser()
  }

  return (
    <div className="menu-mobile-wrapper">
      <Button onClick={showDrawer} className="btn-menu">
        <MenuOutlined />
      </Button>
      <Drawer
        closeIcon={<CloseOutlined />}
        title={<SearchBar />}
        width={280}
        placement="left"
        onClose={onClose}
        visible={visible}
      >
        <Menu
          onClick={handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          mode="inline"
        >
          <SubMenu key="shop" title="Shop">
            <Menu.Item key="shopAll">
              <Link to={ROUTER.Shop} onClick={onClose}>
                Shop All
              </Link>
            </Menu.Item>
            <Menu.Item key="adults">
              <Link to="/adults" onClick={onClose}>
                Adults
              </Link>
            </Menu.Item>
            <Menu.Item key="kids">
              <Link to="/kids" onClick={onClose}>
                Kids
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="faq">
            <Link to={ROUTER.FAQ} onClick={onClose}>
              FAQ
            </Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to={ROUTER.Contact} onClick={onClose}>
              Contact
            </Link>
          </Menu.Item>
          <SubMenu
            key="account"
            title={
              !isEmpty(user) ? (
                <>
                  <Avatar
                    size="small"
                    className="avatar"
                    icon={<UserOutlined />}
                  />
                  &ensp;
                  {user.firstName}
                </>
              ) : (
                'Login'
              )
            }
          >
            {!isEmpty(user) ? (
              <>
                <Menu.Item key="profile">
                  <Link to={ROUTER.Profile} onClick={onClose}>
                    <ProfileOutlined /> Profile
                  </Link>
                </Menu.Item>
                <Menu.Item key="logout" onClick={handleLogout}>
                  <LogoutOutlined /> Log Out
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item key="login">
                  <Link to={ROUTER.Login} onClick={onClose}>
                    Log In
                  </Link>
                </Menu.Item>
                <Menu.Item key="register">
                  <Link to={ROUTER.Register} onClick={onClose}>
                    Register
                  </Link>
                </Menu.Item>
              </>
            )}
          </SubMenu>
        </Menu>
      </Drawer>
    </div>
  )
}

export default MenuMobile
