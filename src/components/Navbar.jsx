import React from 'react';
import { Icon } from '@iconify/react';
import Modal from './Modal';
import {Stats} from './Stats';
import {Settings} from './Settings';
import {Instructions} from './Instructions';
import {Info} from './Info';

export const Navbar = () => {
  const displayModal = (modalType) => {
    switch(modalType) {
    case 'Stats':
      return <Modal modalContent={<Stats/>}></Modal>;
    case 'Info':
      return <Modal modalContent={<Info/>}></Modal>;
    case 'Instructions':
      return <Modal modalContent={<Instructions/>}></Modal>;
    case 'Settings':
      return <Modal modalContent={<Settings/>}></Modal>;
    default:
      return;
    }
  };

  return (
    <nav>
      <div className='nav-options'>
        <Icon icon="ic:round-info" onClick={() => displayModal('Info')}/>
        <Icon icon="f7:question" onClick={() => displayModal('Instructions')}/>
      </div>  
      <h1 style={{
        textTransform: 'uppercase',
        display: 'flex',
        letterSpacing: 2,
        justifyContent: 'flex-start',
        alignItems: 'center'}}>flagle</h1>
      <div className='nav-options'>
        <Icon icon="gridicons:stats-down-alt" onClick={() => displayModal('Stats')}/>
        <Icon icon="ph:gear-fill" onClick={() => displayModal('Settings')}/>
      </div>  
    </nav>
  );
};

