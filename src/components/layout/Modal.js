import React from 'react'
import Puns from '../puns/Puns'

const Modal = ({ handleClose, show, heading, body }) => {
    const showHideClassName = show ? "modal modal-display" : "modal modal-hide"
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
            <div className="modal-header">
              <div className="modal-header-title">
                <h3>{heading}</h3>
              </div>
              <div className="modal-header-close">
                <button className="btn-close" onClick={handleClose}>X</button>
              </div>
            </div>
            <div className="modal-body">
                <Puns/>
            </div>
          <div className="modal-footer">
            <button className="btn btn-lg btn-animation btn-secondary" onClick={handleClose}>Close</button>
          </div>
        </section>
      </div>
    )
}

export default Modal