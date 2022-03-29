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
      .catch(_err => {
        let container = document.querySelector(".blogs .container");
        let error_elem = document.createTextNode("error: require index of blog failed");
        container.appendChild(error_elem);
      });
  }

  useEffect(() => {
    getIndex();
  }, [])

  // 更新本地列表
  const upate = () => {
    for(let blog of blogs) {
      let is_f = false;
      for(let i = 0; i < index.length; ++i) {
        if(index[i].id === blog.id) {
          is_f = true;
          break;
        }
      }
      if(!is_f) {
        index.push(blog);
      }
    }
    index.sort((a, b) => {
      return b.id - a.id
    })
  }

  return (
    <div className="blogs">
        <div className="container">
          {
            upate()
          }
          {
            index.map((elem) => {
              return <BlogCard isNight={isNight} key={elem.id} title={elem.name} desc={elem.descript}></BlogCard>
            })
          }
        </div>
        <img className='tomodati' src={isNight ? tomodati.night : tomodati.light} alt="ともだち！" />
    </div>
  )
}
