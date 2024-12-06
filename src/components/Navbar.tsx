import React from 'react';
import { Icon } from '@iconify/react';

export const Navbar = () => {
  return (
    <nav className="flex h-16 items-center justify-between p-4 text-white">
      <div className="flex gap-4 bg-transparent">
        <Icon icon="ic:round-info"/>
        <Icon icon="f7:question"/>
      </div>
      <h1 className="flex items-center justify-start text-3xl font-semibold uppercase tracking-widest">
        flagle
      </h1>
      <div className="flex gap-4 bg-transparent">
        <Icon icon="gridicons:stats-down-alt"/>
        <Icon icon="ph:gear-fill"/>
      </div>
    </nav>
  );
};
