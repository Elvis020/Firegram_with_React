import {
    useState,
    useEffect
} from 'react'
import {
    projectStorage,
    projectFirestore,
    timeStamp
} from '../firebase/config'



const useFirestore = (collection) => {
    const [docs, setDocs] = useState([])

    // Impleting useEffect to rerender this component whenever a change occurs
    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')     //Making sure that the data is ordered by the time it was created and in descending order.
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                })
                setDocs(documents)
            })
            // Cleaning up
            return () => unsub();
    }, [collection])



    return {docs}
}

export default useFirestore;
