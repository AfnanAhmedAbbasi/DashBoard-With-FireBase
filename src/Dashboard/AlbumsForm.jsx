import React, { useState } from 'react';
import AFScreenHeader from '../components/AFScreenHeader';
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import AFButton from '../components/AFButton';
import '../pages/pages.css';
import { addAlbumsToFireStore } from '../firebase/FireBaseFunctions';


const AlbumsForm = () => {
  const navigate = useNavigate();
  const [model, setModel] = useState({});
  const addAlbum= async ()=>{
    await addAlbumsToFireStore(model)
    alert("Album Added")
    setModel({})
  }


  return (
    <div className="flex flex-col h-screen">
      <AFScreenHeader
        backButton={[
          {
            button: () => (
              <button onClick={() => navigate('/albums')} className="text-3xl">
                <IoArrowBack />
              </button>
            )
          }
        ]}
        Title="Album Form"
      />

      <div className="flex flex-col gap-3 flex-grow justify-center items-center">
        <input
          type="text"
          placeholder="Artist Name"
          className="w-[35vw] inp px-7"
          onChange={(e) => setModel({ ...model, artist: e.target.value })}
          value={model.artist || ''}
        />
        <input
          type="text"
          placeholder="Enter Title"
          className="w-[35vw] inp px-7"
          onChange={(e) => setModel({ ...model, title: e.target.value })}
          value={model.title|| ''}
        />
        
        
        <input 
          type="text" 
          placeholder='Enter image Url'
          className="w-[35vw] px-4 py-2 border border-gray-300 rounded-md"
         onChange={(e)=> setModel({...model,coverImageUrl:e.target.value})}
         value={model.coverImageUrl|| ''}
        />

        <AFButton lable="Add Album" onClick={() => addAlbum()} width="w-[12vw]" />
      </div>
    </div>
  );
};

export default AlbumsForm
