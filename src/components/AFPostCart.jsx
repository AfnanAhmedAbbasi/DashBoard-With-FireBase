// PostCard.jsx
import React from 'react';

const PostCard = ({ post }) => {
    return (
        <div className='flex  w-full justify-between '>

        <div className="bg-white shadow-sm rounded-lg p-4 mb-4  mx-auto  ">
         
            {post.imageUrl && (
                <img src={post.imageUrl} alt="Post cover" className="w-full h-32 object-cover rounded-md mb-2" />
            )}
            
           
            <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
            
            
            {post.comments && post.comments[0] && (
                <p className="text-gray-600 text-sm">{post.comments[0].comment}</p>
            )}
        </div>
            </div>
    );
};

export default PostCard;
