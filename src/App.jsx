import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import BlogContainer from './components/BlogContainer'
import Footer from './components/Footer'

import './App.css'
import './night.css'

export default function App() {
  // 保存主题颜色
  const [isNight, setNight] = React.useState(false);

  // 设置主题颜色
  const lightSwitch = () => {
    setNight(!isNight);
    // 设置手机状态栏颜色
    const target = document.querySelector("#phone-state-content");
    if(isNight) {
      target.setAttribute("content", "#fff");
    } else {
      target.setAttribute("content", "#2e2e2e");
    }
  }

  return (
    <div className={isNight ? `body_night` : ``}>
        <Header isNight={isNight}></Header>
        <Profile isNight={isNight} setNight={lightSwitch}></Profile>
        <BlogContainer isNight={isNight}></BlogContainer>
        <Footer isNight={isNight}></Footer>
    </div>
  )
}
