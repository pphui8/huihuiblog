import React from 'react'
import BlogContainer from './components/BlogContainer'
import Profile from './components/Profile'

export default function Home(props) {
  const isNight = props.isNight;
  return (
    <div>
      <Profile isNight={isNight}></Profile>
      <BlogContainer isNight={isNight}></BlogContainer>
    </div>
  )
}
