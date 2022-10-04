import React, {useRef} from 'react'

const FileUploader = ({onFileSelectError, onFileSelectSuccess}) => {
    const fileInput = useRef(null);
    const onReset = () => {
      fileInput.current.value = null;
    };

    const handleFileInput = (e) => {
        //handle validations
        const file = e.target.files[0];
        console.log(file);
        if(!file){
          return;
        }
        if(file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || file.type === "text/csv" || file.type === "application/vnd.ms-excel")
            {
              onFileSelectSuccess(file)
            }
        else
        {
            onFileSelectError({error: "Please upload valid Excel file"});
            onReset();
        }  
    }

  return (
    <div className="file-uploader">
        <input ref={fileInput} type="file" onChange={handleFileInput} />
    </div>
  )
}

export default FileUploader