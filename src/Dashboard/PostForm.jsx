import React, { useState } from 'react';
import AFScreenHeader from '../components/AFScreenHeader';
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import AFButton from '../components/AFButton';
import '../pages/pages.css';
import { addPostsToFirestore } from '../firebase/FireBaseFunctions';

const PostForm = () => {
  const navigate = useNavigate();
  const [model, setModel] = useState({});
  const addPost= async ()=>{
    await addPostsToFirestore(model)
    alert("Post added")
    setModel({})
  }


  return (
    <div className="flex flex-col h-screen">
      <AFScreenHeader
        backButton={[
          {
            button: () => (
              <button onClick={() => navigate('/posts')} className="text-3xl">
                <IoArrowBack />
              </button>
            )
          }
        ]}
        Title="Post Form"
      />

      <div className="flex flex-col gap-3 flex-grow justify-center items-center">
        <input
          type="text"
          placeholder="Title"
          className="w-[35vw] inp px-7"
          onChange={(e) => setModel({ ...model, title: e.target.value })}
          value={model.title || ''}
        />
        <input
          type="text"
          placeholder="One Comment"
          className="w-[35vw] inp px-7"
          onChange={(e) => setModel({ ...model, comment: e.target.value })}
          value={model.comment || ''}
        />
        
        
        <input 
          type="file" 
          className="w-[35vw] px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Upload a picture" 
        />

        <AFButton lable="Add Post" onClick={() => addPost()} width="w-[12vw]" />
      </div>
    </div>
  );
};

export default PostForm;
