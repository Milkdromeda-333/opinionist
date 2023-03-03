import { createContext } from 'react';
import { useState } from 'react';
import { userAxios } from '../utils/axiosHandlers';

const context = createContext();

function UserContextProvider(props) {

    const userDefaults = {
        username: '',
        id: ''
    }

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || userDefaults);

    const [token, setToken] = useState(localStorage.getItem('auth')|| '');

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