import React, {useState} from 'react'
import FileUploader from './components/FileUploader';

const App = () => {
  const [selectedfile, setSelectedfile] = useState(null);
  const submitForm = () => {
    console.log("FILE IS::", selectedfile);
  };

  return (
    <div className='App'>
      <h4>File :</h4><span>{ selectedfile && selectedfile.name}</span>
      <form>
        <FileUploader
          onFileSelectSuccess={(file) => setSelectedfile(file)}
          onFileSelectError={(error) => alert(error.error)}
        />
        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  )
}

export default App
