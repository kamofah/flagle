import React from 'react'
import { Instructions } from './Instructions'
import { Stats } from './Stats'
import { Settings } from './Settings'

export const Navbar = () => {
  return (
    <div id="nav-container">
      <nav>
        <div id='nav-left'>
          <Instructions/>
        </div>
        <div id="title">
          <h1><span>Flag</span>le</h1>
        </div>
        <div id='nav-right'>
          <Stats/>
          <Settings/>
        </div>
        
      </nav>
    </div>
  )
}

