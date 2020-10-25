import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

function ImageGrid({ setSelectedImage }) {
    // Calling the custom hooks
    const { docs } = useFirestore("images");
    console.log(docs);
    return (
        <div className="img-grid">
            {docs &&
                docs.map((doc) => (
                    <motion.div 
                    className="img-wrap" 
                    key={doc.id} 
                    layout
                    onClick={() => setSelectedImage(doc.url)} whileHover={{ opacity: 1 }}>
                        <motion.img
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}} 
                        transition={{delay: 1}} 
                        src={doc.url} alt="Uploaded pic" />
                    </motion.div>
                ))}
        </div>
    );
}

export default ImageGrid;
