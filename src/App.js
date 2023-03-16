import React, {useEffect, useMemo, useRef, useState} from "react";
import './styles/Post.css';
import PostList from "./components/PostList";
import counter from "./components/Counter";
import MyButton from "./components/UI/button/MyButton";
import NewPostForm from "./components/NewPostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/Modal";
import {usePosts} from "./hooks/ usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useLoading} from "./hooks/useLoading";
import {getPageCount} from "./utils/pages";
import Pagination from "./components/UI/Pagination/Pagination";

function App() {
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const [active, setActive] = useState(false)

    const [totalPages, setTotalPages] = useState(0)

    const [limit, setLimit] = useState(8)

    const [page, setPage] = useState(1)

    useEffect( () => {
        console.log('useEffect')
        fetchPosts()
    }, [page])

    // const [fetchPosts, isPostLoading, postError] = useLoading( async () => {
    //     const response = await PostService.getAllPosts(limit, page)
    //     setPosts(response.data.map(post => {
    //         return {id: post.id,  title: post.title, content: post.body}
    //     }))
    //     const postsCount = response.headers['x-total-count']
    //     setTotalPages(getPageCount(postsCount, limit))
    // })

    const [isLoading, setIsLoading] = useState(false)

    const fetchPosts = () => {
        setIsLoading(true)
        PostService.getAllPosts(limit, page).then(response => {
                setPosts(response.data.map(post => {
                            return {id: post.id,  title: post.title, content: post.body}
                        }))
                const postsCount = response.headers['x-total-count']
                setTotalPages(getPageCount(postsCount, limit))
                setIsLoading(false)
            }).catch(error => {
                console.log(error)
            })
    }

    const searchedPosts = usePosts(posts, filter.sort, filter.query)


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setActive(false )
    }

    const removePost = (post) => {
         document.getElementById(`post-${post.id}`).classList.add('move')
         setTimeout(() => setPosts(posts.filter(p => p.id !== post.id)), 300)

    }

    const getToOtherPage = (page) => {
        setPage(page)
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
        })
    }, [])


  return (
    <div className="App">
        <MyButton onClick ={() => setActive(true) }>ADD NEW POST</MyButton>
        <PostFilter filter={filter} setFilter={setFilter}/>
        { isLoading
            ?<Loader />

            : <PostList posts={searchedPosts} title={'API posts'} remove={removePost} />
        }
        <Pagination
            change={getToOtherPage}
            totalPages={totalPages}
        />
        <Modal active={active} setActive={setActive}>
            <NewPostForm create={createPost}/>
        </Modal>
    </div>
  );
}

export default App;
