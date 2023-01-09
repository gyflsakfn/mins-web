import React from 'react'
import { createPortal } from 'react-dom';
import { useModalContext } from '../context/ModalContext';
import Card from './Card'
import './modal.css'

const Modal = ({ className, children }) => {
  const { showModal, closeModalHandler } = useModalContext();

  return (
    <>
      {
        // {createPortal(children, domNode)}
        showModal && createPortal
          (<>
            <section id="backdrop" onClick={closeModalHandler}></section>
            <Card className={className}>{children}</Card>
          </>, document.getElementById('overlays'))
      }
    </>
  )
}

export default Modal