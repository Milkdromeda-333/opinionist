import { createContext, useEffect } from "react";
import { useState } from "react";
import { getPosts } from '../axios';

const ContextProvider = createContext();

function AppContext(props) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const postsArr = getPosts()
        setPosts(postsArr)
    }, [])
    
return (
        <ContextProvider.Provider value={posts}>
            {props.children}
        </ContextProvider.Provider>
);
}

export {AppContext, ContextProvider}