import React, { useRef } from 'react';
import { Icon } from '@iconify/react';

const Modal = ({modalContent}) => {
  return (
    <dialog>
      <Icon icon="mi:close" onClick={() => {}}/>
      <div>  
        {modalContent}
      </div>
    </dialog>
  );
};

export default Modal;