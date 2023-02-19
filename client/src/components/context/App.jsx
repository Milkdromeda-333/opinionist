import { createContext, useEffect } from "react";
import { useState } from "react";
import { getPosts } from '../axios';

const appContext = createContext();

function App(props) {

    const [posts, setPosts] = useState([])
    const [isNewPostOpen, setIsNewPostOpen] = useState(false);

    useEffect(() => {
        const postsArr = getPosts()
        setPosts(postsArr)
    }, [])
    
return (
    <appContext.Provider value={
        {posts,
        isNewPostOpen,
        setIsNewPostOpen}}>
            {props.children}
        </appContext.Provider>
);
}

export {appContext, App}