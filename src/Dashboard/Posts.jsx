// Posts.jsx
import React, { useEffect, useState } from 'react';
import PostCard from '../components/AFPostCart';
import { addDummyPostToFirestore, db, fetchPostsFromFirestore } from '../firebase/FireBaseFunctions';


const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const fetchedPosts = await fetchPostsFromFirestore();
            setPosts(fetchedPosts);
        };
        getPosts();
    }, []);

    const addPostToFireStore = async()=>{
        await addDummyPostToFirestore();
    }



    return ( 
        <div className="px-4 py-6 flex flex-col items-center justify-center ">
            <h1 className="text-2xl font-bold mb-4 text-center" >Posts</h1>
            <div className='flex flex-wrap'>

            {posts.length > 0 ? (
                posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))
            ) : (
                <p className="text-center">No posts available</p>
            )}
            </div>
            <div>
            <button onClick={() => addPostToFireStore()}>Add Post</button>
            </div>
        </div>
    );
};

export default Posts;
