import {useState,useEffect} from 'react'
import  {projectStorage} from '../firebase/config'



// Creating custom Hooks
function useStorage(file) {
    // Creating three states
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)


    // Setting up useEffect
    useEffect(() => {
        // References to where the fils should be saved
        const storageRef = projectStorage.ref(file.name)


        // To upload the reference file, and take snapshots of the file as it uploads
        storageRef.put(file).on('state_changed')
    }, [file])
    return (
        <div>
            
        </div>
    )
}

export default useStorage
