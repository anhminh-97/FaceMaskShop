import React from 'react'
import { Skeleton, Row, Col } from 'Components/UI-Library'
import './Loading.Style.less'

const Loading = () => {
  return (
    <Row gutter={[40, 40]}>
      {[1, 2, 3, 4].map((item, index) => {
        return (
          <Col span={6} key={index.toString()}>
            <div className="containerLoadingShop">
              <Skeleton.Button active={true} size={400} shape="default" />
              <div className="contentTitle">
                <Skeleton.Input
                  active={true}
                  style={{ width: 200, height: 20 }}
                  shape="default"
                />
              </div>
              <div className="contentTitle">
                <Skeleton.Input
                  active={true}
                  style={{ width: 200, height: 20 }}
                  shape="default"
                />
              </div>
            </div>
          </Col>
        )
      })}
    </Row>
  )
}

export default Loading
