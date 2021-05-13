import Cart from 'Components/Cart'
import { Avatar, Button, Dropdown, Menu } from 'Components/UI-Library'
import {
  LogoutOutlined,
  ProfileOutlined,
  SearchOutlined,
  UserOutlined,
} from 'Components/UI-Library/Icons'
import { ROUTER } from 'Constants/CommonConstants'
import { useStoreActions, useStoreState } from 'easy-peasy'
import isEmpty from 'lodash/isEmpty'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './NavBar.Style.less'
import SearchBar from './SearchBar.Component'

const Navbar = () => {
  const history = useHistory()
  const [openSearch, setOpenSearch] = useState(false)
  const user = useStoreState((state) => state.auth.user)

  const removeUser = useStoreActions((actions) => actions.auth.removeUser)
  const handleOpenSearch = () => {
    setOpenSearch(!openSearch)
  }

  const handleLogout = () => {
    removeUser()
  }
  const handleToProfile = (e) => {
    e.preventDefault()
    history.push(ROUTER.Profile)
  }
  const handleToLogin = (e) => {
    e.preventDefault()
    history.push(ROUTER.Login)
  }

  return (
    <div className="nav-bar">
      <div className="search">
        <Button className="btn-search" onClick={handleOpenSearch}>
          <SearchOutlined className="search-icon" />
        </Button>
        {openSearch && <SearchBar />}
      </div>

      <Dropdown
        overlay={
          <Menu>
            {!isEmpty(user) ? (
              <>
                <Menu.Item>
                  <Link to={ROUTER.Profile}>
                    <ProfileOutlined /> Profile
                  </Link>
                </Menu.Item>
                <Menu.Item onClick={handleLogout}>
                  <LogoutOutlined /> Log Out
                </Menu.Item>
              </>
            ) : (
              <Menu.Item>
                <Link to={ROUTER.Register}>Register</Link>
              </Menu.Item>
            )}
          </Menu>
        }
      >
        <Link
          to=""
          className="login ant-dropdown-link"
          onClick={!isEmpty(user) ? handleToProfile : handleToLogin}
        >
          <Avatar size="small" className="avatar" icon={<UserOutlined />} />
          {!isEmpty(user) ? `${user.firstName}` : 'Log In'}
        </Link>
      </Dropdown>
      <Cart />
    </div>
  )
}

export default Navbar
