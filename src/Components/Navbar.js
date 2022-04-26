import React from 'react'
import { Instructions } from './Instructions'
import { Stats } from './Stats'
import { Settings } from './Settings'

export const Navbar = () => {
  return (
    <div id="nav-container">
      <nav>
        <Instructions/>
        <h1><span>Flag</span>le</h1>
        <div id='nav-left'>
          <Stats/>
          <Settings/>
        </div>
        
      </nav>
    </div>
  )
}

