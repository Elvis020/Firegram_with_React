import React, {useEffect} from 'react';
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

function ProgressBar({file, setFile}) {


    // Configuring the progress and the url for the upload
    const {url , progress} = useStorage(file);

    // Setting up useEffect to monitor when the file has finished uploading
    useEffect(() => {
      if(url) return setFile(null)
    }, [url, setFile])
    console.log(progress, url)

    return (
    <motion.div 
    className="progress-bar"
    initial={{width: 0}}
    animate={{width: progress + "%"}}></motion.div>
    );
}

export default ProgressBar;
