import React from 'react';
// import { Instructions } from './Instructions';
// import { Stats } from './Stats';
// import { Settings } from './Settings';

export const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <div className="title">
          <h1 style={{textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>flagle</h1>
        </div>
        {/* <div className='nav-right'>
          <Instructions/>
          <Stats/>
          <Settings/>
        </div>   */}
      </nav>
    </div>
  );
};

