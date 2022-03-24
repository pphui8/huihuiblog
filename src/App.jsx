import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import API from './pages/API'
import AboutMe from './pages/AboutMe'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

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
        <Header isNight={isNight} setNight={lightSwitch}></Header>
        {/* 注册路由 */}
        <Routes>
          <Route path='/' element={<Home isNight={isNight}></Home>}></Route>
          <Route path='/API' element={<API isNight={isNight}></API>}></Route>
          <Route path='/aboutme' element={<AboutMe isNight={isNight}></AboutMe>}></Route>
        </Routes>
        <Footer isNight={isNight}></Footer>
    </div>
  )
}
