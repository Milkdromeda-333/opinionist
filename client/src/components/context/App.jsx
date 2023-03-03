import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { userAxios } from '../utils/axiosHandlers';

const appContext = createContext();

function App(props) {

    const [allPosts, setAllPosts] = useState([])
    const [isNewPostOpen, setIsNewPostOpen] = useState(false);
    
return (
    <appContext.Provider
        value={{
        allPosts,
        setAllPosts,
        isNewPostOpen,
        setIsNewPostOpen
    }}
    >
        {props.children}
    </appContext.Provider>
);
}

export {appContext, App}