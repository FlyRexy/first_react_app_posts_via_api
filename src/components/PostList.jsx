import React, {useState} from 'react';
import Post from "./Post";
import '../styles/Post.css'

const PostList = ({posts, title, remove}) => {

    if(!posts.length) {
        console.log('HOW ARE YOU HERE')
        return (
            <h1>There are no posts</h1>
        )
    }
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>{title}</h2>
            <div className="posts__all">
                    { posts.map( (post, index) =>
                            <Post number={index + 1} post={post} remove={remove} key={post.id}/>
                    )}
            </div>

        </div>
    );
};

export default PostList;