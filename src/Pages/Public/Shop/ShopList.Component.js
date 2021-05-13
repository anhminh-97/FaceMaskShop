import React from 'react'
import { Row, Col } from 'Components/UI-Library'
import { ProductItem } from 'Components/PageHelper/ProductItem'
import { useStoreActions, useStoreState } from 'easy-peasy'

const ShopList = () => {
  const productShop = useStoreState((state) => state.shop.productShop)
  const setProductDetail = useStoreActions(
    (actions) => actions.products.setProductDetail
  )

  const onHandleProductDetail = (data) => {
    setProductDetail(data)
  }

  return (
    <div className="product-list">
      <Row gutter={[40, 40]}>
        {productShop.map((item) => {
          return (
            <Col
              xs={12}
              md={8}
              lg={6}
              key={item.id}
              onClick={() => onHandleProductDetail(item)}
            >
              <ProductItem
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
              />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default ShopList
