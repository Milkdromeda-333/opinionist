import { createContext, useEffect } from 'react';
import { useState } from 'react';
import data from '../../../data.json';

const appContext = createContext();

function App(props) {

    const [posts, setPosts] = useState([])
    const [isNewPostOpen, setIsNewPostOpen] = useState(false);

    useEffect(() => {
        // dummy data
        const postsArr = data
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