import React from 'react';
import { Icon } from '@iconify/react';

export const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <div className="title">
          <h1 style={{
            textTransform: 'uppercase',
            display: 'flex',
            letterSpacing: 2,
            justifyContent: 'center',
            alignItems: 'center'}}>flagle</h1>
        </div>
        <div className='nav-right'>
          <Icon icon="emojione-v1:question-mark" />
          <Icon icon="gridicons:stats-down-alt" />
          <Icon icon="ph:gear-fill"/>
        </div>  
      </nav>
    </div>
  );
};

