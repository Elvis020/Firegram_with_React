import {useState,useEffect} from 'react'
import {
    projectStorage,
    projectFirestore,
    timeStamp
} from '../firebase/config'



// Creating custom Hooks
function useStorage(file) {
    // Creating three states
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)


    // Setting up useEffect
    useEffect(() => {


        // References to where the files should be saved in both firestorage and firestore database
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images')


        // To upload the reference file, and take snapshots of the file as it uploads
        storageRef.put(file).on('state_changed', (snap)=> {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
        }, (err) =>{
            setError(err)
        }, async() => {
            // FUnction that fires when the upload is complete
            const url = await storageRef.getDownloadURL();

            // Adding file to firestore database
            const createdAt = timeStamp();
            collectionRef.add({ url, createdAt });
            setUrl(url)
        })
    }, [file])
    return {progress, url, error}
}

export default useStorage;
