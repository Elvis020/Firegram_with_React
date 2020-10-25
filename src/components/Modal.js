import React from 'react'
import { motion } from "framer-motion";

function Modal({selectedImage, setSelectedImage}) {


    const handleClick = (e) => {
      if (e.target.classList.contains('backdrop')) return setSelectedImage(null)
    }
    return (
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        animation={{delay: 1}}
        className="backdrop" 
        onClick={handleClick}>
            <motion.img 
            initial={{y: "-100vh"}}
            animate={{y: 0}}
            src={selectedImage} 
            alt="Enlarged pic" />
        </motion.div>
    )
}

export default Modal;
