import React, { useState } from 'react'
import "./modal.css"
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Modal = () => {
    const [modal, setModal] = useState(true);

    const closeModal = () => {
        setModal(false);
    }

  return (
    modal && <div className='modal'>
        <div className='modal__container' >
           <div className='modal__container_header'>
            <IconButton onClick={closeModal}>
             <CloseIcon style={{color: "white", backgroundColor: "#EF5398", borderRadius: "50%"}} />
            </IconButton>
           </div>
           <div className='modal__container_content'>

           </div>
        </div>
    </div>
  )
}

export default Modal