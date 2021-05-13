import React from 'react'
import get from 'lodash/get'
import { Carousel } from 'react-responsive-carousel'
import { useStoreState } from 'easy-peasy'

const ProductCarousel = () => {
  const productDetail = useStoreState((state) => state.products.productDetail)
  return (
    <Carousel infiniteLoop="true">
      {get(productDetail, 'image', []).map((item, index) => (
        <div key={index.toString()}>
          <img src={item} alt="" />
        </div>
      ))}
    </Carousel>
  )
}

export default ProductCarousel
