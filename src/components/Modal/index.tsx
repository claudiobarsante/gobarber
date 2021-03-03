import React, { useState } from 'react';
import ReactModal from 'react-modal';

import './styles.css';

ReactModal.setAppElement('#root');
// import { Container } from './styles';
interface Props {
  isOpen: boolean;
}
const Modal = ({ isOpen }: Props) => {
  const [openState, setOpenState] = useState(isOpen);
  console.log('isOpen ', openState);
  function toggleModal() {
    setOpenState(!openState);
  }
  return (
    <ReactModal
      isOpen={openState}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={500}
    >
      <div>My modal dialog.</div>
      <button onClick={toggleModal}>Close</button>
    </ReactModal>
  );
};

export default Modal;
