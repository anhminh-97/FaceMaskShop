import React from 'react'

import { Button, Upload } from 'Components/UI-Library'
import './ProfileAvatar.Style.less'

const ProfileAvatar = () => {
  return (
    <div className="profile-img">
      <img src="https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg" alt="" />
      <Upload name="avatar" className="upload-image">
        <Button className="file">Change Photo</Button>
      </Upload>
    </div>
  )
}

export default ProfileAvatar
