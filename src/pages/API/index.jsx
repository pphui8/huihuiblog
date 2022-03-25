import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import '../../github-markdown-dark.css'
import '../../github-markdown-light.css'
import './index.css'

export default function API(props) {
  const [article, setArticle] = useState("Loading...");
  const isNight = props.isNight;
  const sanningumi = {
    "light": "https://tvax4.sinaimg.cn/large/006z6YU4ly1h0lyf0fuwxj30fj06zjt0.jpg",
    "night": "https://tvax1.sinaimg.cn/large/006z6YU4ly1h0lyk1aaw1j30fj06zabq.jpg"
  }
  const getReadMe = () => {
    fetch(`https://raw.githubusercontent.com/pphui8/huihuiblog/main/APIdoc.md`)
      .then(response => response.text())
      .then(res => setArticle(res))
      .catch(err => console.log('Request Failed', err));
  }
  useEffect(async () => {
     getReadMe();
  }, [])
  return (
    <div className='API'>
      <div className="APIContainer">
        <div className={isNight ? 'article markdown-body-dark' : 'article markdown-body'}>
          <ReactMarkdown children={article} remarkPlugins={[gfm]}></ReactMarkdown>
        </div>
      </div>
      <img className='sanningumi' src={isNight ? sanningumi.night : sanningumi.light} alt="美緒ちゃん..." />
    </div>
  )
}
