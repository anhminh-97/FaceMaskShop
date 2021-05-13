import { Button, Col, Row } from 'Components/UI-Library'
import { ROUTER } from 'Constants/CommonConstants'
import React from 'react'
import { useHistory } from 'react-router-dom'
import './index.less'

const NotFound = () => {
  const history = useHistory()
  const handleGoHome = () => {
    history.push(ROUTER.Home)
  }
  return (
    <div className="notfound-wrapper">
      <Row justify="center">
        <Col span={24} className="image">
          <img
            src="https://img.freepik.com/free-vector/error-404-huge-numbers-tiny-angry-people-users_81534-2112.jpg?size=626&ext=jpg"
            alt=""
          />
        </Col>
        <Col span={6}>
          <Button type="primary" className="btn-back-home" onClick={handleGoHome}>
            GO BACK HOME
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default NotFound
