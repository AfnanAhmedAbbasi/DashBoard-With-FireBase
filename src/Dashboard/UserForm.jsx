import React, { useState } from 'react'
import AFScreenHeader from '../components/AFScreenHeader';
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import Password from 'antd/es/input/Password';
import AFButton from '../components/AFButton';
import { addUsersToFirestore } from '../firebase/FireBaseFunctions'
import '../pages/pages.css'


const UserForm = () => {
  const navigate = useNavigate();
  const [model, setModel] = useState({});
  const handelUser = async () => {

    if (model.name && model.phone && model.email && model.website) {
      try {
        await addUsersToFirestore([model]);
        setModel({});
        alert("User added");
      } catch (error) {
        console.log("Error writing data:", error);
      }
    } else {
      alert("All fields are required");
    }
  };

  return (
    <div className='flex flex-col   mt-0 border-2 h-screen '>
      <AFScreenHeader backButton={[{
        button: () => (
          <button onClick={() => navigate('/user')} className='text-3xl'><IoArrowBack /></button>
        )
      }]}
        Button={<IoArrowBack />}
        Title={"User Form"}
      />
      <div className='flex flex-col gap-3  h-4/5  justify-center items-center' >
        <input type='text' placeholder='Enter Name' className='w-[35vw]   inp    px-7' onChange={(e) => {
          setModel({ ...model, name: e.target.value })
        }} value={model.name || ''} />
        <input type='text' placeholder='Enter Contact' className='w-[35vw]   inp   px-7' onChange={(e) => {
          setModel({ ...model, phone: e.target.value })
        }} value={model.phone || ''} />
        <input type='email' placeholder='Enter Email' className='w-[35vw]  inp    px-7 ' onChange={(e) => {
          setModel({ ...model, email: e.target.value })
        }} value={model.email || ''} />
        <input type='text' placeholder='Enter Website' className='w-[35vw]  inp    px-7' onChange={(e) => {
          setModel({ ...model, website: e.target.value })
        }} value={model.website || ''} />
        <AFButton lable={'Add user'} onClick={() => handelUser()} width="w-[12vw]" />
      </div>
    </div>
  )
}

export default UserForm
