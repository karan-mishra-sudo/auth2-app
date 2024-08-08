import React from 'react'
import LogoutButton from './LogoutButton'
import Profile from './Profile'
export default function Mainapp() {
  return (
    <div>
      <h1>This is the main page of app </h1>
      <Profile/>
      <LogoutButton/>
    </div>
  )
}
