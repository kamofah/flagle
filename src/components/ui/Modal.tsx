import React, { useRef } from 'react';
import { Icon } from '@iconify/react';

const Modal = ({modalContent}) => {
  const modalRef = useRef(null);

  // function handleClose(){
  //   if(modalRef.current){
  //     modalRef.current.close()
  //   }
  // }

  return (
    <dialog ref={modalRef}>
      <Icon icon="mi:close" onClick={() => {}}/>
      <div>
        {modalContent}
      </div>
    </dialog>
  );
};

export default Modal;