// Posts.jsx
import React, { useEffect, useState } from 'react';
import PostCard from '../components/AFPostCart';
import {  fetchPostsFromFirestore } from '../firebase/FireBaseFunctions';
import AFScreenHeader from '../components/AFScreenHeader';
import AFButton from '../components/AFButton';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const getPosts = async () => {
            setLoader(true)
            const fetchedPosts = await fetchPostsFromFirestore();
            setLoader(false)
            setPosts(fetchedPosts);
        };
        getPosts();
    }, []);


    

    return (
        <div className='flex flex-col h-screen'>

            <div className=" -py-6">
                <AFScreenHeader
                    Title='Posts'
                    actionButtons={[
                        {
                            display: () => (
                                <AFButton lable="Make a Post" onClick={() => navigate('/PostForm')} />
                            )
                        }
                    ]}
                />
            </div>

            {loader && (
                <div className="">
                    <img
                        src='https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87_w200.gif'
                        alt="Loading..."
                        className="loader"
                    />
                </div>
            )}
            {!loader && (

                <div className='flex-grow overflow-y-auto p-4'>
                    {posts.length > 0 ? (
                        <div className='flex flex-wrap gap-4'>
                            {posts.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center">No posts available</p>
                    )}
                </div>

            )};
          

        </div>
    );
};

export default Posts;
