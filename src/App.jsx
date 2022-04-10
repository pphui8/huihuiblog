import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import Home from './pages/Home'
import API from './pages/API'
import AboutMe from './pages/AboutMe'
import Article from './pages/Article'
import Footer from './components/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import './night.css'

let origin_light = false;
export default function App(props) {
  // 保存主题颜色
  const [isNight, setNight] = React.useState(false);
  // 设置主题颜色
  const lightSwitch = () => {
    setNight(!isNight);
    // 状态存储到 localstorage
    window.localStorage.setItem("isNight", !isNight);
    // 设置手机状态栏颜色
    const target = document.querySelector("#theme-color");
    if(isNight) {
      target.setAttribute("content", "#fff");
    } else {
      target.setAttribute("content", "#2e2e2e");
    }
  }

  useEffect(() => {
    origin_light = window.localStorage.getItem("isNight");
    // 如果是第一次启动
    if(origin_light == null) {
      window.localStorage.setItem("isNight", false);
      origin_light = false;
      const target = document.querySelector("#theme-color");
      target.setAttribute("content", "#fff");
    }
    if(isNight.toString() !== origin_light.toString()) {
      setNight(Boolean(origin_light.toString()));
    }
  }, [])

  return (
    <div className={isNight ? `body_night` : ``}>
      <Toaster />
        <Header isNight={isNight} setNight={lightSwitch}></Header>
        {/* 注册路由 */}
        <Routes>
          <Route path='/' element={<Home isNight={isNight}></Home>}></Route>
          <Route path='/API' element={<API isNight={isNight}></API>}></Route>
          <Route path='/aboutme' element={<AboutMe isNight={isNight}></AboutMe>}></Route>
          <Route path='/article' element={<Article isNight={isNight}></Article>}></Route>
          <Route path='*' element={<Navigate to="/" />}></Route>
        </Routes>
        <Footer isNight={isNight}></Footer>
    </div>
  )
}