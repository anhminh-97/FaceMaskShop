import { Col, Row } from 'Components/UI-Library'
import { useStoreState } from 'easy-peasy'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './TagsHome.Style.less'

export const TagsHome = () => {
  const { t } = useTranslation(['home'])
  const tags = useStoreState((state) => state.home.tags)

  return (
    <>
      <div className="title">{t('Tag Us on Your Daily Cruise #visage')}</div>
      <div className="bg-light-pink">
        <div className="tag">
          <Row
            gutter={[
              { xs: 40, sm: 40, lg: 60 },
              { xs: 40, sm: 40, lg: 60 },
            ]}
          >
            {tags.map((item, index) => (
              <Col xs={12} md={6} key={index.toString()}>
                <div className="tag-item">
                  <Link to="/">
                    <img src={item.image} alt="" />
                    <div className="box-overlay" />
                    <div className="tag-content">{item.tag}</div>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  )
}
