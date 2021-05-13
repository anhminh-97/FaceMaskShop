import { Col, Row } from 'Components/UI-Library'
import { introItem } from 'Constants/CommonConstants'
import React from 'react'

import { IntroItem } from 'Components/PageHelper/IntroItem'
import { useTranslation } from 'react-i18next'

export const IntroList = () => {
  const { t } = useTranslation(['home'])
  return (
    <>
      <div className="title">{t('Our Masks')}</div>
      <Row gutter={[40, 40]} justify="center">
        {introItem.map((item, index) => (
          <Col sm={18} md={12} lg={8} key={index.toString()}>
            <IntroItem
              className="bg-light-pink"
              image={item.image}
              title={item.title}
              content={item.content}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}
