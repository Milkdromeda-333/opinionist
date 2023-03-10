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

    // posts filter.

    const newestFirst = () => {
        userAxios.get('/api/posts/sort/newest-first')
            .then(res => {
                setAllPosts(res.data)      
            })
            .catch(err => console.log(err));
    }

    const oldestFirst = () => {
        userAxios.get('/api/posts/sort/oldest-first')
            .then(res => {
                setAllPosts(res.data)      
            })
            .catch(err => console.log(err));
    }

    const popularFirst = () => {
         userAxios.get('/api/posts/sort/popular-first')
            .then(res => {
                setAllPosts(res.data)      
            })
            .catch(err => console.log(err));
    }

    const mostContraversal = () => {
         userAxios.get('/api/posts/sort/most-contraversial')
            .then(res => {
                setAllPosts(res.data)      
            })
            .catch(err => console.log(err));
    }
return (
    <appContext.Provider
        value={{
        allPosts,
        setAllPosts,
        isNewPostOpen,
        setIsNewPostOpen,
        updateFeed,
        newestFirst,
        oldestFirst,
        popularFirst,
        mostContraversal
    }}
    >
        {props.children}
    </appContext.Provider>
);
}

export {appContext, App}