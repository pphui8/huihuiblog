import React, { useEffect, useState, useLayoutEffect } from 'react'
import BlogCard from '../BlogCard'
import './index.css'

let index = [];

export default function BlogContainer(props) {
  const root = `api.pphui8.me`;
  const isNight = props.isNight;
  const [blogs, setBlogs] = useState([]);
  const tomodati = {
    "light": "https://tvax4.sinaimg.cn/large/006z6YU4ly1h0lz7hc81hj30dw0u075l.jpg",
    "night": "https://tvax3.sinaimg.cn/large/006z6YU4ly1h0lz7mre07j30dw0u0t9y.jpg"
  }

  // 获取列表
  const getIndex = () => {
    fetch(`https://` + root + `/index`, {
      method: `GET`,
      mode: `cors`
    })
      .then(response => response.json())
      .then(res => setBlogs(eval("(" + res.index + ")")))
      .catch(err => console.log('Request Failed', err));
  }

  useEffect(() => {
    getIndex();
  }, [])

  // 更新本地列表
  const upate = () => {
    for(let blog in blogs) {
      let is_f = false;
      for(let i = 0; i < index.length; ++i) {
        if(index[i] == blog) {
          is_f = true;
          break;
        }
      }
      if(!is_f) {
        // 插入到列表前面
        index.unshift(blog)
      }
    }
  }

  return (
    <div className="blogs">
        <div className="container">
          {
            upate()
          }
          {
            index.map((value, index) => {
              return <BlogCard isNight={isNight} key={index} title={value} desc={blogs[value]}></BlogCard>
            })
          }
        </div>
        <img className='tomodati' src={isNight ? tomodati.night : tomodati.light} alt="ともだち！" />
    </div>
  )
}
