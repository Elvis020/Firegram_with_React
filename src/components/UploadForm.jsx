import React, {useState} from 'react'
import ProgressBar from "./ProgressBar";


function UploadForm() {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    // Setting up array of allowed file types
    const types = ['image/png', 'image/jpeg']
    const onChangeHandler = (e) => {
        let selected = e.target.files[0]

        // Checking if file type is valid and input is not empty
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('')
        } else {
            setFile(null);
            setError('Please a select an image with file type (png or jpeg)');
        }
    }
    return (
      <form>
          <label>
            <input type="file" onChange={onChangeHandler} />
            <span style={{cursor: "pointer"}}>+</span>
          </label>
            <div className="output">
                {error && <div className="error"> {error} </div>}
                {file && <div> {file.name} </div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
      </form>
    );
}

export default UploadForm;
