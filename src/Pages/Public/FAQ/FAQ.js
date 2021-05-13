import Headline from 'Components/PageHelper/Headline'
import React from 'react'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'

import './index.less'
import { Col, Row, Collapse } from 'Components/UI-Library'

const { Panel } = Collapse

const FAQ = () => {
  return (
    <div>
      <Headline label="FAQ" />
      <div className="faq-wrapper">
        <Row>
          <Col span={16} offset={4}>
            <div className="sub-title">Common Questions</div>
          </Col>
          <Col span={16} offset={4}>
            <Collapse
              expandIconPosition="right"
              expandIcon={({ isActive }) =>
                isActive ? <MinusOutlined /> : <PlusOutlined />
              }
            >
              <Panel header="How do I add a new question?" key="1">
                <p>
                  To add a new question go to app settings and press Manage
                  Questions button.
                </p>
              </Panel>
              <Panel header="Can I insert pictures in my FAQ?" key="2">
                <div>
                  Yes! To add a picture follow these simple steps:
                  <ol>
                    <li>Enter App Settings</li>
                    <li> Click the Manage Questions button</li>
                    <li>
                      Click on the question you would like to attach a picture
                      to
                    </li>
                    <li>
                      When editing your answer, click on the picture icon and
                      then add an image from your library
                    </li>
                  </ol>
                </div>
              </Panel>
              <Panel header="Can I insert a video in my FAQ?" key="3">
                <div>
                  Yes! To add a picture follow these simple steps:
                  <ol>
                    <li>Enter App Settings</li>
                    <li> Click the Manage Questions button</li>
                    <li>
                      Click on the question you would like to attach a picture
                      to
                    </li>
                    <li>
                      When editing your answer, click on the picture icon and
                      then add an image from your library
                    </li>
                    <li>
                      Thats it! A thumbnail of your video will appear in answer
                      text box
                    </li>
                  </ol>
                </div>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default FAQ
