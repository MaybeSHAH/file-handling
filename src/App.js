import React, {useState} from 'react'
import FileUploader from './components/FileUploader';
import * as XLSX from 'xlsx';

const App = () => {
  const [selectedfile, setSelectedfile] = useState(null);
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const submitForm = (e) => {
    e.preventDefault();
    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, {type: "binary"});
      const wsname = wb.SheetNames[0];
      const ws =  wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_csv(ws, {header: 1});
      const rows = XLSX.utils.sheet_to_row_object_array(ws, {header: 1});
      console.table(rows);
      setRows(rows.length)
      console.log(data); //Object.keys
    };
    reader.readAsBinaryString(selectedfile);
  };
  const processSelectedFile = (file) => {
    setSelectedfile(file)
  };

  return (
    <div className='App'>
      <div>
      <h4>File :</h4><span>{ selectedfile && selectedfile.name}</span>
      </div>
      <form>
        <FileUploader
          onFileSelectSuccess={processSelectedFile}
          onFileSelectError={(error) => alert(error.error)}
        />
        <button onClick={submitForm}>Submit</button>
      </form>
      <div> <h4> Rows Count:{rows}</h4> </div>
      <div> <h4> Columns Count:{columns}</h4> </div>
    </div>
  )
}

export default App
