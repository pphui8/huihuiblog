import React from 'react'
import Header from './components/Header'
import Blog from './components/Blog'
import Footer from './components/Footer'

import './App.css'
import './night.css'

export default function App() {
  const [isNight, setNight] = React.useState(false);

  const lightSwitch = () => setNight(!isNight);

  return (
    <div className={isNight ? `body_night` : ``}>
        <Header isNight={isNight} setNight={lightSwitch}></Header>
        <Blog isNight={isNight}></Blog>
        <Footer isNight={isNight}></Footer>
    </div>
  )
}
