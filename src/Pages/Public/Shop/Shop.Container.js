import React from 'react'

import Headline from 'Components/PageHelper/Headline'
import ShopList from './ShopList.Component'
import useShopHook from './Shop.Hook'
import Loading from './Loading.Component'

import './index.less'
import ShopPagination from './ShopPagination.Component'

const Shop = () => {
  const { loading } = useShopHook()

  return (
    <div className="shop-wrapper">
      <Headline label="Shop All" />
      {loading && <Loading />}
      {!loading && <ShopList />}
      <ShopPagination />
    </div>
  )
}

export default Shop
