import React from 'react'
import BlogCard from '../BlogCard'
import './index.css'

export default function BlogContainer(props) {
  const isNight = props.isNight;
  return (
    <div className="blogs">
        <div className="container">
          <BlogCard isNight={isNight}></BlogCard>
          <BlogCard isNight={isNight}></BlogCard>
          <BlogCard isNight={isNight}></BlogCard>
          <BlogCard isNight={isNight}></BlogCard>
          <BlogCard isNight={isNight}></BlogCard>
          <BlogCard isNight={isNight}></BlogCard>
        </div>
    </div>
  )
}
