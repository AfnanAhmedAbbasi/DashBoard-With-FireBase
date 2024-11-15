import React, { useState } from 'react';
import AFScreenHeader from '../components/AFScreenHeader';
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import AFButton from '../components/AFButton';
import '../pages/pages.css';
import {  addPhotosToFireStore } from '../firebase/FireBaseFunctions';


const PhotosForm = () => {
  const navigate = useNavigate();
  const [model, setModel] = useState({});
  const addPhoto= async ()=>{
    await addPhotosToFireStore(model)
    alert("Photo Added")
    setModel({})
  }


  return (
    <div className="flex flex-col h-screen">
      <AFScreenHeader
        backButton={[
          {
            button: () => (
              <button onClick={() => navigate('/photos')} className="text-3xl">
                <IoArrowBack />
              </button>
            )
          }
        ]}
        Title="Photo Form"
      />

      <div className="flex flex-col gap-3 flex-grow justify-center items-center">
        <input
          type="text"
          placeholder="Enter Image Url"
          className="w-[35vw] inp px-7"
          onChange={(e) => setModel({ ...model, coverImageUrl: e.target.value })}
          value={model.coverImageUrl || ''}
        />
        

        <AFButton lable="Add Photo" onClick={() => addPhoto()} width="w-[12vw]" />
      </div>
    </div>
  );
};

export default PhotosForm
