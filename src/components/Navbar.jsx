import React from 'react';
import { Icon } from '@iconify/react';

export const Navbar = () => {
  return (
    <nav>
      <div className='nav-options'>
        <Icon icon="ic:round-info" />
        <Icon icon="f7:question" />
      </div>  
      <h1 style={{
        textTransform: 'uppercase',
        display: 'flex',
        letterSpacing: 2,
        justifyContent: 'flex-start',
        alignItems: 'center'}}>flagle</h1>
      <div className='nav-options'>
        <Icon icon="gridicons:stats-down-alt" />
        <Icon icon="ph:gear-fill"/>
      </div>  
    </nav>
  );
};

