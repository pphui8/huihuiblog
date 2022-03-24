import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import '../../github-markdown-dark.css'
import '../../github-markdown-light.css'
import './index.css'

export default function AhoutMe(props) {
  const [article, setArticle] = useState("加载中....");
  const isNight = props.isNight;
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
          <ReactMarkdown children={article}></ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
