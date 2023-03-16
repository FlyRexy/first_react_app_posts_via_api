import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const NewPostForm = ({create}) => {

    const [post, setPost] = useState({title: '', content: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', content: ''})
    }

    return (
    <div>
        <MyInput
            type={'text'}
            onChange={e => setPost({...post, title: e.target.value})}
            placeholder={'Input title'}
            value = {post.title}
        />
        <MyInput
            type={'text'}
            placeholder={'Input content'}
            onChange={e => setPost({...post, content: e.target.value})}
            value = {post.content}
        />
        <MyButton onClick={addNewPost}>Add new post</MyButton>
    </div>
    );
};

export default NewPostForm;