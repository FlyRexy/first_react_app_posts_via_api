import React from 'react';
import '../styles/Post.css'

const Post = (props) => {
    return (
        <div className="post" id={`post-${props.post.id}`}>
            <div className="post__content">
                <div className="info__title">{props.post.id}) {props.post.title}</div>
                <div className="post__description">
                    {props.post.content}
                </div>
            </div>
            <div className="post__btns">
                <button className="post_delete" onClick={() => props.remove(props.post)}>Delete the post</button>
            </div>
        </div>
    );
};

export default Post;