import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';

const Card = () => {
    const posts =useSelector((state)=>state.posts)
    const dispatch =useDispatch()
    console.log(posts)
    useEffect(()=>{
      dispatch(fetchPosts())
    },[dispatch])
    return (
        <div>
           {
            posts.posts?.map(post=><div key={post.id}>{post.id}{post.title}</div>)
           }
        </div>
    );
};

export default Card;