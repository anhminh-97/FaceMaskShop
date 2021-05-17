import { Spin } from 'Components/UI-Library'
import React from 'react'
import { LoadingOutlined } from 'Components/UI-Library/Icons'

import { HomeBanner } from './HomeBanner.Component'
import { IntroList } from './IntroList.Component'
import { ProductHome } from './ProductHome.Component'
import { BlogHome } from './BlogHome.Component'
import { TagsHome } from './TagsHome.Component'
import useHome from './Home.Hook'

import './Home.less'

const Home = () => {
  const { loading } = useHome()
  return (
    <Spin indicator={<LoadingOutlined />} spinning={loading}>
      <div className="main">
        <HomeBanner />
        <div className="content">
          <ProductHome />
          <IntroList />
          <BlogHome />
          <TagsHome />
        </div>
      </div>
    </Spin>
  )
}

export default Home
