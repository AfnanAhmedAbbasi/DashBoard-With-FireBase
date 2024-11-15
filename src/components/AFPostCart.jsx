import React from 'react';

const PostCard = ({ post }) => {
    return (
        <div className="flex justify-between mt-2">
            <div className="bg-white shadow-sm rounded-lg p-4 mb-4 max-w-xs mx-auto">
                {post.imageUrl && (
                    <img src={post.imageUrl} alt="Post cover" className="w-full h-32 object-cover rounded-md mb-2" />
                )}
                <h2 className="text-lg font-semibold mb-1 gap-4 flex"><span className='font-light text-sm'>Title</span> {post.title}</h2>
                {post.comment && (
                    <p className="text-gray-600 text-sm">Comment: <span className='mx-2'>{post.comment}</span></p>
                )}
            </div>
        </div>
    );
};

export default PostCard;
