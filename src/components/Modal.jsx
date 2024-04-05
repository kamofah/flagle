import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  backgroundColor: gray;
`;

const ModalContainer = styled.div`
  height: 50%;
  width: 50%;
`;


const Modal = ({modalContent}) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <Icon icon="mi:close" />
        {modalContent}
      </ModalContainer>
    </ModalBackground>
  );
};

Modal.propTypes = {
  modalContent: PropTypes.any,
};

export default Modal;