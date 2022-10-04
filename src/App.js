import React, {useState} from 'react'
import FileUploader from './components/FileUploader';
import * as XLSX from 'xlsx';

const App = () => {
  const [selectedfile, setSelectedfile] = useState(null);
  const submitForm = (e) => {
    e.preventDefault();
    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, {type: "binary"});
      const wsname = wb.SheetNames[0];
      const ws =  wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_csv(ws, {header: 1});
      console.log(data);
    };
    reader.readAsBinaryString(selectedfile);
  };

  return (
    <div className='App'>
      <div>
      <h4>File :</h4><span>{ selectedfile && selectedfile.name}</span>
      </div>
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
