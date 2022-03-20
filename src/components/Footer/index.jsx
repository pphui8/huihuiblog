import React from 'react'
import './index.css'
import './night.css'

export default function Footer(props) {
  const isNight = props.isNight;
  const ashiato = {
    "normal": "https://tvax3.sinaimg.cn/large/006z6YU4ly1h0fl1nqkmhj30lk0brwf8.jpg",
    "night": "https://tvax2.sinaimg.cn/large/006z6YU4ly1h0gh6q19bdj30lk0braau.jpg"
  }
  return (
    <footer className={isNight ? `footer_night` : ``}>
        <div className="line"></div>
        <p className="at">@pphui8</p>
        <p className="touunn">-東雲研究所-</p>
        <img src={isNight ? ashiato.night : ashiato.normal} alt="sakamotosanno" className="ashiato" />
    </footer>
  )
}
