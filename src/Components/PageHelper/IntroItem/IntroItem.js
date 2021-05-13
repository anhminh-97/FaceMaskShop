import React from "react";

import './index.less';

export const IntroItem = ({ className, image, title, content }) => {
  return (
    <div className="intro-wrapper">
      <div className={`intro-item ${className}`}>
        <img src={image} alt="" />
        <div className="title">{title}</div>
        <div className="content">{content}</div>
      </div>
    </div>
  );
};

