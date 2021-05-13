import React from 'react'
import { useTranslation } from 'react-i18next'

import { Col, Row } from 'Components/UI-Library'
import Artical from 'Assets/Images/09.jpg'
import './BlogHome.Style.less'

export const BlogHome = () => {
  const { t } = useTranslation(['home'])

  return (
    <>
      <div className="title">{t('What We Stand For')}</div>
      <Row gutter={[40, 40]}>
        <Col sm={24} lg={12}>
          <div className="col-left">
            <p className="col-left-content text-center">
              {t(
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sequi quisquam eum et consequatur accusamus nam quia ratione minima recusandae placeat eius voluptatum animi ducimus nemo, maiores veniam ab! Voluptas eligendi, quam placeat ipsam maxime nemo vero ea voluptate quod ducimus enim cumque quisquam velit accusamus sequi quia nulla delectus!'
              )}
            </p>
          </div>
        </Col>
        <Col sm={24} lg={12}>
          <div className="col-right">
            <img src={Artical} alt="" />
          </div>
        </Col>
      </Row>
    </>
  )
}
