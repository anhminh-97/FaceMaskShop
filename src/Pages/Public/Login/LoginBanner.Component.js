import React from 'react'

import { Col } from 'Components/UI-Library'
import './LoginBanner.Style.less'

const LoginBanner = () => {
  return (
    <Col lg={12} xl={16} className="login-banner">
      <img
        src="https://img.freepik.com/free-photo/young-asia-girl-wearing-medical-face-mask-shows-something-blank-space-with-dressed-casual-cloth-looking-camera-isolated-blue-background-social-distancing-quarantine-corona-virus_7861-2707.jpg?size=626&ext=jpg"
        alt=""
      />
    </Col>
  )
}

export default LoginBanner
