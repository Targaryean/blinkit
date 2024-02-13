import React, { useState } from 'react';
import Dropzone from 'react-dropzone';


const HomePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-500 min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <nav className="bg-light-blue-500 shadow-md w-full flex justify-between items-center py-4 px-8">
        <a href="/" className="text-xl font-bold">Utkarsh Singh</a>
        <div className="flex items-center">
          <a href="/login" className="mr-4 hover:underline">Login</a>
          <a href="/signup" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">Sign Up</a>
        </div>
      </nav>

      {/* Hero text or logo (optional) */}
      <h1 className="text-4xl text-white font-bold mb-4 mt-8">Image Uploader</h1>
      <h4 className=" text-white font-bold mb-4">Whole functinality coming soon! Rest Assured!
        </h4>
      <h4 className=" text-white font-bold mb-4">For now doesn't know when the applications will be closed!
        </h4>

      {/* Image upload section */}
      <div className="rounded-lg shadow-md bg-white p-8 flex flex-col items-center">
        <Dropzone onDrop={onDrop} multiple={false} accept="image/*">
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="border-dashed border-2 border-gray-300 p-4 flex flex-col justify-center items-center min-h-40 hover:border-blue-500 cursor-pointer">
              <input {...getInputProps()} />
              <p className="text-gray-700">Drag & drop your image here or click to browse</p>
            </div>
          )}
        </Dropzone>
        {selectedFile && (
          <div className="mt-4">
            <img src={URL.createObjectURL(selectedFile)} alt="Preview" className="w-64 h-48 object-cover rounded-lg" />
            {/* Optional progress bar or confirmation message */}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
