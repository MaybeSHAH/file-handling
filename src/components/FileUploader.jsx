import React, {useRef} from 'react'

const FileUploader = ({onFileSelectError, onFileSelectSuccess}) => {
    const fileInput = useRef(null);

    const handleFileInput = (e) => {
        //handle validations
        const file = e.target.files[0];
        console.log(file);
        if(file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
            onFileSelectSuccess(file)
        else
            onFileSelectError({error: "Please choose .xlsx file only"});
           
    }

  return (
    <div className="file-uploader">
        <input type="file" onChange={handleFileInput} />
        <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary"></button>
    </div>
  )
}

export default FileUploader