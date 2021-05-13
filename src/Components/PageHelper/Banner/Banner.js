import banner from 'Assets/Images/banner.jpg'
import { Button, Col, Row } from 'Components/UI-Library'
import { ROUTER } from 'Constants/CommonConstants'
import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

export const Banner = () => {
  return (
    <Row>
      <Col className="banner">
        <img src={banner} alt="" />
        <div className="banner-content">
          Reusable
          <br />
          Face Masks
          <div className="mt-lg">
            <Link to={ROUTER.Shop}>
              <Button className="btn-shop-now">Shop Now</Button>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  )
}
