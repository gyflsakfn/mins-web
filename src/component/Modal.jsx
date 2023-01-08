import React from 'react'
import { createPortal } from 'react-dom';
import Card from './Card'
import './modal.css'

const Modal = ({ className, children }) => {
  return (
    <>
      {
        // {createPortal(children, domNode)}
        createPortal
          (<>
            <section id="backdrop"></section>
            <Card className={className}>{children}</Card>
          </>, document.getElementById('overlays'))
      }
    </>
  )
}

export default Modal