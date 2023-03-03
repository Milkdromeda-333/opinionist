import { createContext } from 'react';
import { useState } from 'react';
import { userAxios } from '../utils/axiosHandlers';

const context = createContext();

function UserContextProvider(props) {

    const [user, setUser] = useState(localStorage.getItem('user'));

    const [token, setToken] = useState(localStorage.getItem('auth'));

    const [userPosts, setUserPosts] = useState([]);

    return (
        <context.Provider
            value={{
            user,
            setUser,
            token,
            setToken,
            userPosts,
            setUserPosts
            }}
        >
            {props.children}
        </context.Provider>
);
}

export {context, UserContextProvider}