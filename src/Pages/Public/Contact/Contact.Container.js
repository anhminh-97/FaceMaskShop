import Headline from 'Components/PageHelper/Headline'
import { Col, Row } from 'Components/UI-Library'
import React from 'react'
import ContactForm from './ContactForm.Component'
import './index.less'

const Contact = () => {
  return (
    <div>
      <Headline label="Get in Touch" />
      <div className="contact-wrapper">
        <Row>
          <Col xs={24} lg={8} className="contact-col">
            <div className="title">Inquiries</div>
            <div className="contact-content">
              For questions regarding our products and services you can also
              contact us by filling out this form.
            </div>
          </Col>
          <Col xs={24} lg={16} className="contact-col">
            <div className="title">Fill in Your Details</div>
            <ContactForm />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Contact
