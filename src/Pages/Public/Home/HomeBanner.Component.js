import React from 'react'

import { Banner } from 'Components/PageHelper/Banner'
import { Carousel } from 'Components/UI-Library'

export const HomeBanner = () => {
  return (
    <Carousel autoplay>
      <div>
        <Banner />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Banner />
      </div>
    </Carousel>
  )
}
