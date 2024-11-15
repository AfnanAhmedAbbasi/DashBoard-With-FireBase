import React, { useState } from 'react';
import AFScreenHeader from '../components/AFScreenHeader';
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import AFButton from '../components/AFButton';
import '../pages/pages.css';
import { addCommentsToFireStore, addPostsToFirestore } from '../firebase/FireBaseFunctions';

const CommentForm = () => {
  const navigate = useNavigate();
  const [model, setModel] = useState({});
  const addComment= async ()=>{
    await addCommentsToFireStore(model)
    alert("Comment  Added")
    setModel({})
  }


  return (
    <div className="flex flex-col h-screen">
      <AFScreenHeader
        backButton={[
          {
            button: () => (
              <button onClick={() => navigate('/comments')} className="text-3xl">
                <IoArrowBack />
              </button>
            )
          }
        ]}
        Title="Comment Form"
      />

      <div className="flex flex-col gap-3 flex-grow justify-center items-center">
        <input
          type="text"
          placeholder="Enter Name"
          className="w-[35vw] inp px-7"
          onChange={(e) => setModel({ ...model, userName: e.target.value })}
          value={model.userName || ''}
        />
        <input
          type="text"
          placeholder="One Comment"
          className="w-[35vw] inp px-7"
          onChange={(e) => setModel({ ...model, message: e.target.value })}
          value={model.message || ''}
        />
        
        
        <input 
          type="date" 
          className="w-[35vw] px-4 py-2 border border-gray-300 rounded-md"
         onChange={(e)=> setModel({...model,timestamp:e.target.value})}
        />

        <AFButton lable="Add Comment" onClick={() => addComment()} width="w-[12vw]" />
      </div>
    </div>
  );
};

export default CommentForm
