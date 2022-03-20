import React from 'react'
import './index.css'
import './night.css'

export default function Header(props) {
  const [switchLoc, setSwitchLoc] = React.useState("switch");
  const isNight = props.isNight;
  const setNight = props.setNight;
  const sakamoto = {
    "normal": "https://tvax4.sinaimg.cn/large/006z6YU4ly1h0fl000u43j31e00u8afz.jpg",
    "sleep": "https://tva3.sinaimg.cn/large/006z6YU4ly1h0gh1hv12kj31b80xcdi6.jpg"
  }
  const hakase =  {
    "normal": "https://tvax2.sinaimg.cn/large/006z6YU4ly1h0fl171sxoj30ej0f4wgy.jpg",
    "sleep": ""
  }
  const lightSwitch = () => {
    setSwitchLoc("switchDown");
    setNight();
    setTimeout(() => {
      setSwitchLoc("switch");
    }, 300);
  }

  return (
    <header className={isNight ? `header_night` : ``}>
      <nav>
          <ul>
              <li><h1>huihuiblog</h1></li>
              <li><p>home</p></li>
              <li><p>API</p></li>
          </ul>
      </nav>
      <div className="head">
            <div className="profile" title="単純な馬鹿でありたい"></div>
            <img src={isNight ? sakamoto.sleep : sakamoto.normal} alt="sakamoto" className="sakamoto" />
            <img src={isNight ? hakase.sleep : hakase.normal} alt="hakase" className="hakase" />
            <div className="lighter">
                <div className="himo"></div>
                <div className={switchLoc} onClick={lightSwitch}></div>
            </div>
            <div className="line_l"></div>
            <div className="line_r"></div>
        </div>
    </header>
  )
}
