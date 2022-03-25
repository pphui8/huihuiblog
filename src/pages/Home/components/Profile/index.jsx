import React from 'react'
import './index.css'
import './night.css'

export default function Profile(props) {
  const isNight = props.isNight;
  const sakamoto = {
    "normal": "https://tvax4.sinaimg.cn/large/006z6YU4ly1h0fl000u43j31e00u8afz.jpg",
    "sleep": "https://tva3.sinaimg.cn/large/006z6YU4ly1h0gh1hv12kj31b80xcdi6.jpg"
  }
  const hakase =  {
    "normal": "https://tvax2.sinaimg.cn/large/006z6YU4ly1h0fl171sxoj30ej0f4wgy.jpg",
    "sleep": "https://tvax1.sinaimg.cn/large/006z6YU4ly1h0lx84djhej30gt0gq76p.jpg"
  }
  return (
    <div className={isNight ? "profile_night" : "head"}>
        <div className="profile" title="単純な馬鹿でありたい"></div>
        <img src={isNight ? sakamoto.sleep : sakamoto.normal} alt="sakamoto" className="sakamoto" />
        <img src={isNight ? hakase.sleep : hakase.normal} alt="hakase" className="hakase" />
        <div className="line_l"></div>
        <div className="line_r"></div>
    </div>
  )
}
