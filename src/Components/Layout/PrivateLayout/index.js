import React, { useEffect, useState } from 'react'
import isEmpty from 'lodash/isEmpty'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useTranslation } from 'react-i18next'
import { Link, useHistory, useLocation } from 'react-router-dom'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  ProfileOutlined,
  LogoutOutlined,
  UserOutlined,
  FormOutlined,
  SettingOutlined,
  PushpinOutlined,
  CopyOutlined,
} from 'Components/UI-Library/Icons'

import {
  Avatar,
  Badge,
  Col,
  Dropdown,
  Layout,
  Menu,
  Row,
} from 'Components/UI-Library'
import { ROUTER } from 'Constants/CommonConstants'
import './index.less'

const { SubMenu } = Menu
const { Header, Sider, Content } = Layout

const PrivateLayout = (props) => {
  const { t } = useTranslation(['Dashboard'])
  const history = useHistory()
  const location = useLocation()
  const redirect = location.search ? location.search.split('=')[1] : '/'

  // Redux
  const count = useStoreState((state) => state.orderAdmin.count)
  const user = useStoreState((state) => state.auth.user)
  const removeUser = useStoreActions((actions) => actions.auth.removeUser)

  useEffect(() => {
    if (isEmpty(user)) {
      history.push(
        redirect
          ? `${ROUTER.Login}?redirect=${redirect}dashboard`
          : ROUTER.Login
      )
    }
  }, [redirect, history, user])

  // State
  const [collapsed, setCollapsed] = useState(false)

  // Function
  const onToggle = () => {
    setCollapsed(!collapsed)
  }
  const handleLogout = () => {
    removeUser()
  }
  return (
    <Layout className="admin-wrapper">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Link className="logo" to={ROUTER.Home}>
          {collapsed ? <HomeOutlined className="home-icon" /> : t('visage')}
        </Link>

        <Menu
          theme="dark"
          mode="inline"
          // defaultSelectedKeys={['1']}
          // defaultOpenKeys={['product']}
          // style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="pages" title="Pages" icon={<CopyOutlined />}>
            <Menu.Item key="allPages">All pages</Menu.Item>
            <Menu.Item key="add-page">Add new</Menu.Item>
          </SubMenu>
          <SubMenu key="users" title="Users" icon={<UserOutlined />}>
            <Menu.Item key="5">All users</Menu.Item>
            <Menu.Item key="6">Edit user</Menu.Item>
          </SubMenu>
          <SubMenu key="posts" title="Posts" icon={<PushpinOutlined />}>
            <Menu.Item key="9">All posts</Menu.Item>
            <Menu.Item key="10">Add new</Menu.Item>
            <Menu.Item key="11">Category</Menu.Item>
          </SubMenu>
          <SubMenu
            key="products"
            icon={<ShoppingCartOutlined />}
            title="Products"
          >
            <Menu.Item key="allProducts">
              <Link to={ROUTER.AllProducts}>All Products</Link>
            </Menu.Item>
            <Menu.Item key="addProduct">
              <Link to={ROUTER.AddProduct}>Add new</Link>
            </Menu.Item>
            <Menu.Item key="category">Category</Menu.Item>
            <Menu.Item key="setting">Setting</Menu.Item>
          </SubMenu>
          <Menu.Item key="all-orders">
            <Link to={ROUTER.AllOrders}>
              <FormOutlined />
              Orders
              <Badge size="small" count={count} offset={[10, 0]} />
            </Link>
          </Menu.Item>
          <SubMenu key="setting" title="Setting" icon={<SettingOutlined />}>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background">
          <Row justify="space-between">
            <Col>
              {collapsed ? (
                <MenuUnfoldOutlined onClick={onToggle} />
              ) : (
                <MenuFoldOutlined onClick={onToggle} />
              )}
            </Col>
            <Col>
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item>
                      <Link to={ROUTER.Profile}>
                        <ProfileOutlined /> Edit Profile
                      </Link>
                    </Menu.Item>
                    <Menu.Item onClick={handleLogout}>
                      <LogoutOutlined /> Log Out
                    </Menu.Item>
                  </Menu>
                }
              >
                <Link
                  to=""
                  className="ant-dropdown-link login"
                  onClick={(e) => e.preventDefault()}
                >
                  <Avatar
                    size="small"
                    className="avatar"
                    icon={<UserOutlined />}
                  />
                  &ensp;{user?.firstName}
                </Link>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Content
          className="pp_container site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default PrivateLayout
