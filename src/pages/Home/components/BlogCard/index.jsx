import React from 'react'
import './index.css'
import './night.css'

export default function BlogCard(props) {
  const isNight = props.isNight;
  const title = props.title;
  const desc = props.desc;
  return (
    <div className={isNight ? `blog_night` : `blog`}>
      <div className="title"><p>{title}</p></div>
      <div className="blog_line"></div>
      <div className="disc"><p>{desc}</p></div>
      <div className="blog_line"></div>
      <div className="blog_footer">
      </div>
    </div>
  )
}
