import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import './night.css'

export default function BlogCard(props) {
  const isNight = props.isNight;
  const title = props.title;
  const desc = props.desc;
  const tag = props.tag;
  return (
      <div className={isNight ? `blog_night` : `blog`}>
        <Link to={`/article`} state={{"title": title}}>
          <div className="title">
            <p>{title}</p>
          </div>
        </Link>
        <div className="blog_line"></div>
        <div className="disc"><p>{desc}</p></div>
        <div className="blog_line"></div>
        <div className="blog_footer">
          <div className="tag">{tag}</div>
        </div>
      </div>
  )
}
