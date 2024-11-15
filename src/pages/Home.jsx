import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaComments } from "react-icons/fa";
import { IoIosAlbums } from "react-icons/io";
import { IoMdPhotos } from "react-icons/io";
import { LuListTodo } from "react-icons/lu";
import { RiLogoutBoxLine } from "react-icons/ri";
import './pages.css'
import Users from '../Dashboard/Users';
import Photos from '../Dashboard/Photos';
import Todos from '../Dashboard/Todos';
import Posts from '../Dashboard/Posts';
import Albums from '../Dashboard/Albums';
import Comments from '../Dashboard/Comments';
import UserForm from '../Dashboard/UserForm';
import PostForm from '../Dashboard/PostForm';
import CommentForm from '../Dashboard/CommentForm';
import AlbumForm from '../Dashboard/AlbumsForm';
import AlbumsForm from '../Dashboard/AlbumsForm';
import PhotosForm from '../Dashboard/PhotosForm';

const Home = () => {
    const navigate=useNavigate()
    return (
        <div className='flex   gap-1 mainDiv'>
            <div className='mainBar  flex flex-col   justify-start  '>
                <h1 className='mx-10 mt-10 font-bold  text-3xl cursor-pointer' onClick={()=> navigate('/home ')}>Dashboard</h1>                       
                <div className='flex flex-col  gap-2 mt-16  mx-7'>
                <Link to={'/user'}  className='xyz '><span className='mx-4  text-2xl'><FaUsers/></span><span className='mx-1 mt-1'>Users</span></Link>
                <Link to={'/posts'} className='xyz'> <span className='mx-4 text-2xl'><MdOutlinePostAdd /></span><span className=''>Posts</span></Link>
                <Link to={'/comments'} className='xyz'> <span className='mx-4 text-2xl'><FaComments /></span><span className=''>Comments</span></Link>
                <Link to={'/albums'}  className='xyz'> <span className='mx-4 text-2xl'><IoIosAlbums /></span><span className=''>Albums</span></Link>
                <Link to={'/photos'} className='xyz'><span className='mx-4 text-2xl'><IoMdPhotos /></span><span className=''>Photos</span></Link>
                <Link to={'/todos'} className='xyz'> <span className='mx-4 text-2xl'><LuListTodo /></span><span className=''>Todos</span></ Link>
                </div>
                <div className='mx-10 mt-36 cursor-pointer logout'><span ><RiLogoutBoxLine /></span><span className='mx-3 text-md'>Log Out</span></div>
            </div>
            <div className='div2'>
                <Routes>
                    <Route path='/HOME' element={<h1 className='text-3xl asd w-full     '> <p>Welcome to the Dashboard!</p>
                    </h1>} /> 
                    <Route path='user' element={<Users />} />
                    <Route path='comments' element={<Comments />} />
                    <Route path='photos' element={<Photos />} />
                    <Route path='todos' element={<Todos />} />
                    <Route path='posts' element={<Posts />} />
                    <Route path='albums' element={<Albums />} />
                    <Route path='userform' element={<UserForm/>}/>
                    <Route path='postform' element={<PostForm/>}/>
                    <Route path='commentform' element={<CommentForm/>}/>
                    <Route path='albumsform' element={<AlbumsForm/>}/>
                    <Route path='photosform' element={<PhotosForm/>}/>
                </Routes>

                
            </div>
        </div>
    );
};

export default Home;
