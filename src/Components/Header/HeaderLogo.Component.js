import { ROUTER } from 'Constants/CommonConstants'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import "./HeaderLogo.Style.less"

const HeaderLogo = () => {
  const { t } = useTranslation(['header'])
  return (
    <div>
      <Link className="logo" to={ROUTER.Home}>
        {t('visage')}
      </Link>
    </div>
  )
}

export default HeaderLogo
