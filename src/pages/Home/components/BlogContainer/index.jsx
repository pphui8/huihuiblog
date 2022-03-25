import React from 'react'
import BlogCard from '../BlogCard'
import './index.css'

export default function BlogContainer(props) {
  const isNight = props.isNight;
  const tomodati = {
    "light": "https://tvax4.sinaimg.cn/large/006z6YU4ly1h0lz7hc81hj30dw0u075l.jpg",
    "night": "https://tvax3.sinaimg.cn/large/006z6YU4ly1h0lz7mre07j30dw0u0t9y.jpg"
  }
  return (
    <div className="blogs">
        <div className="container">
          <BlogCard isNight={isNight}></BlogCard>
        </div>
        <img className='tomodati' src={isNight ? tomodati.night : tomodati.light} alt="ともだち！" />
    </div>
  )
}
