import ProductCart from 'Components/PageHelper/ProductCart'
import { Tabs } from 'Components/UI-Library'
import {
  HeartOutlined,
  HistoryOutlined,
  PullRequestOutlined,
  UserOutlined,
} from 'Components/UI-Library/Icons'
import React from 'react'
import ProfileForm from './ProfileForm.Component'
import StatusOrder from './StatusOrder.Component'
import './ProfileTabs.Style.less'

const { TabPane } = Tabs

const ProfileTabs = () => {
  return (
    <Tabs tabPosition="left">
      <TabPane
        tab={
          <>
            <UserOutlined /> My Profile
          </>
        }
        key="profile"
      >
        <ProfileForm />
      </TabPane>
      <TabPane
        tab={
          <>
            <PullRequestOutlined />
            Order Status
          </>
        }
        key="status"
      >
        <StatusOrder />
      </TabPane>
      <TabPane
        tab={
          <>
            <HeartOutlined /> Wishlist
          </>
        }
        key="wishlist"
      >
        abc1
      </TabPane>
      <TabPane
        tab={
          <>
            <HistoryOutlined /> History
          </>
        }
        key="history"
      >
        <ProductCart />
      </TabPane>
    </Tabs>
  )
}

export default ProfileTabs
