import React from 'react'
import './index.css'
import './night.css'

export default function Header(props) {
  const isNight = props.isNight;

  return (
    <header className={isNight ? `header_night` : ``}>
      <nav>
          <ul>
              <li><h1>huihuiblog</h1></li>
              <li><p>home</p></li>
              <li><p>API</p></li>
          </ul>
      </nav>
    </header>
  )
}
