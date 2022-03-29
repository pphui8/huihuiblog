import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import './night.css'

export default function Header(props) {
  const isNight = props.isNight;
  const [switchLoc, setSwitchLoc] = React.useState("switch");
  const setNight = props.setNight;
  const lightSwitch = () => {
    // 设置拉开关的小动画
    setSwitchLoc("switchDown");
    setNight();
    setTimeout(() => {
      setSwitchLoc("switch");
    },300);
  }

  return (
    <header className={isNight ? `header_night` : ``}>
      <nav>
          <ul>
              <li>
                <Link to="/"><h1>huihuiblog</h1></Link>
              </li>
              <li>
                <a href="https://pphui8.me"><p>home</p></a>
              </li>
              <li>
                <Link to="/API"><p>API</p></Link>
              </li>
              <li>
                <Link to="/aboutme"><p>about</p></Link>
              </li>
          </ul>
      </nav>
      <div className="lighter">
          <div className="himo"></div>
          <div className={switchLoc} onClick={lightSwitch}></div>
      </div>
    </header>
  )
}
