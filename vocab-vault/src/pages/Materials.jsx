import Typewriter from 'typewriter-effect'
import React, { useState } from 'react';


const Materials = () => {
  const [fileList, setFileList] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    Array.from(files).forEach(uploadFile);
    Array.from(files).forEach(previewFile);
    storeFiles(Array.from(files));
  };

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append('file', file);

    // Use your upload endpoint to send the file to the server!! MAKE SURE TO DO THIS!! not done as of 8:17 pm 5/27
    fetch('your-upload-endpoint', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        console.log('File uploaded successfully');
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFileList((prevFileList) => [...prevFileList, file]);
    };
  };

  const storeFiles = (files) => {
    const storedFiles = JSON.parse(localStorage.getItem('droppedFiles')) || [];
    const updatedFiles = [...storedFiles, ...files];
    localStorage.setItem('droppedFiles', JSON.stringify(updatedFiles));
  };

  const showFiles = () => {
    const storedFiles = JSON.parse(localStorage.getItem('droppedFiles')) || [];
    setFileList(storedFiles);
  };

  return (
    <div>
      <div className="container">
        <h1>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 200,
              strings: ["Your Materials ..."]
            }}
          />
        </h1>
      </div>
      <div>
        <div
          id="dropArea"
          onDragEnter={(e) => e.preventDefault()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          style={{
            border: '2px dashed #ccc',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <p>Drag and drop PDF files here</p>
        </div>
  
        <div>
          <button onClick={showFiles}>Hello</button>
        </div>
  
        <div>
          {fileList.map((file, index) => (
            <div key={index}>
              <strong>{file.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
         
}
  
export default Materials;






// function Materials() {
//     return (

//         <div className = 'container'>
//             <h1>
//                 <Typewriter options= {{
//                     autoStart: true,
//                     loop: true,
//                     delay: 200,
//                     strings: ["Your Materials ..."]
//                 }}

//                 />

//                 </h1>
    
//             </div>

        
//     );
// }

// export default Materials;