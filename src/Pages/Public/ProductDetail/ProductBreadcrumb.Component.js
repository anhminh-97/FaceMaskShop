import React from 'react'
import { Link } from 'react-router-dom'
import { useStoreState } from 'easy-peasy'

import { ROUTER } from 'Constants/CommonConstants'
import { Breadcrumb } from 'Components/UI-Library'

const ProductBreadcrumb = () => {
  const productDetail = useStoreState((state) => state.products.productDetail)
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={`${ROUTER.ProductDetail}/${productDetail.id}`}>
          {productDetail.name}
        </Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default ProductBreadcrumb
