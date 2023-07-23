import { useEffect, useState } from 'react';
import ListPostsView from './ListPostsView';
import axios from 'axios';

const ListPostsController = () => {

    const [blogData, setBlogData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3004/posts")
            .then(res => setBlogData(res.data))
            .catch(err => console.log(err))

    }, [])

    const showUserPost = (user) => {
        setShowModal(!showModal);
        setUserPosts(blogData.filter((post) => post.user == user));
    }

    return (
        <div><ListPostsView blogData={blogData} showModal={showModal} showUserPost={showUserPost} userPosts={userPosts} /></div>
    )
}

export default ListPostsController;