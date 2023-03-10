import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { userAxios } from '../utils/axiosHandlers';

const appContext = createContext();

function App(props) {

    const [allPosts, setAllPosts] = useState([])
    const [isNewPostOpen, setIsNewPostOpen] = useState(false);

    const updateFeed = () => {
        userAxios.get('/api/posts')
            .then(response => {
            setAllPosts(response.data);
        })
        .catch(err => console.log(err))
    }
    
return (
    <appContext.Provider
        value={{
        allPosts,
        setAllPosts,
        isNewPostOpen,
        setIsNewPostOpen,
        updateFeed
    }}
    >
        {props.children}
    </appContext.Provider>
);
}

export {appContext, App}