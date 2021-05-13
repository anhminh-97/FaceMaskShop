import { useStoreState } from 'easy-peasy'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Button, Col, Row } from 'Components/UI-Library'
import { ROUTER } from 'Constants/CommonConstants'
import { ProductItem } from 'Components/PageHelper/ProductItem'

export const ProductHome = () => {
  const { t } = useTranslation(['home'])
  const products = useStoreState((state) => state.home.products)

  return (
    <>
      <div className="title">{t('Most Popular')}</div>
      <div className="most-product">
        <Row
          gutter={[
            { xs: 20, sm: 20, lg: 40 },
            { xs: 20, sm: 20, lg: 40 },
          ]}
        >
          {products.map((item, index) => {
            return (
              <Col xs={12} md={6} key={index.toString()}>
                <ProductItem
                  name={item.name}
                  price={item.price}
                  image={item.image[0]}
                  id={item.id}
                />
              </Col>
            )
          })}
        </Row>
      </div>
      <div className="text-center">
        <Link to={ROUTER.Shop}>
          <Button className="btn">Shop All</Button>
        </Link>
      </div>
    </>
  )
}
