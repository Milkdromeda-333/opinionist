import { createContext } from 'react';
import { useState } from 'react';

import { userAxios } from '../utils/axiosHandlers';

const context = createContext();

function UserContextProvider(props) {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    const [token, setToken] = useState(localStorage.getItem('auth'));

    const [userComments, setUserComments] = useState([]);

    const [userPosts, setUserPosts] = useState([]);

    const getUserComments = () => {
        userAxios.get(`api/comments/user/${user._id}`)
            .then(res => {
                setUserComments(res.data);
            })
            .catch(err => console.log(err));
    }

    const getUserPosts = () => {
        userAxios.get(`/api/posts/user/${user._id}`)
            .then(res => {
                setUserPosts(res.data);
            }).catch(err => console.log(err));
    }

    return (
        <context.Provider
            value={{
                user,
                setUser,
                token,
                setToken,
                userComments,
                userPosts,
                getUserPosts,
                getUserComments
            }}
        >
            {props.children}
        </context.Provider>
);
}

export {context, UserContextProvider}