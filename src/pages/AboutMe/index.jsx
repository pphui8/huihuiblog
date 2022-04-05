import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import '../../github-markdown-dark.css'
import '../../github-markdown-light.css'
import './index.css'
import Filing from './Filing'
import Message from './Message'

export default function AhoutMe(props) {
  const [article, setArticle] = useState("Loading...");
  const isNight = props.isNight;
  const kakoiitoomou = {
    "light": "https://tvax4.sinaimg.cn/large/006z6YU4ly1h0lxd388pej30m60epag8.jpg",
    "night": "https://tva4.sinaimg.cn/large/006z6YU4ly1h0lxkzqvbgj30m60ep0yt.jpg"
  }
  const getReadMe = () => {
    fetch(`https://raw.githubusercontent.com/pphui8/pphui8/main/README.md`)
      .then(response => response.text())
      .then(res => setArticle(res))
      .catch(err => console.log('Request Failed', err));
  }
  useEffect(async () => {
    getReadMe();
  }, [])
  return (
    <div className='aboutMe'>
      <div className="container">
        <div className={isNight ? 'article markdown-body-dark' : 'article markdown-body'}>
          <ReactMarkdown children={article}></ReactMarkdown>
        </div>
        <Filing isNight={isNight}></Filing>
        <Message isNight={isNight}></Message>
      </div>
      <img className='kakoiitoomou' src={isNight ? kakoiitoomou.night : kakoiitoomou.light} alt="かっこういいと思うこと！" />
    </div>
  )
}
