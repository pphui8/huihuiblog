import React from 'react'
import './index.css'
import './night.css'

export default function BlogCard(props) {
  const isNight = props.isNight;
  return (
    <div className={isNight ? `blog_night` : `blog`}>
      <div className="title"><p>hello world</p></div>
      <div className="blog_line"></div>
      <div className="disc"><p>hello world</p></div>
      <div className="blog_line"></div>
      <div className="blog_footer">
      </div>
    </div>
  )
}

const getBlogIndex = () => {
  
}
