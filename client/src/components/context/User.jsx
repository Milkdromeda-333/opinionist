import { createContext } from 'react';
import { useState } from 'react';
import axios from "axios";

const context = createContext();

function UserContextProvider(props) {

    const userDefaults = {
        username: '',
        id: ''
    }

    const [user, setUser] = useState(userDefaults);

    const [token, setToken] = useState(localStorage.getItem('auth'));

    const [userPosts, setUserPosts] = useState([]);

    const userAxios = axios.create();

    userAxios.interceptors.response.use(config => {
        const token = localStorage.getItem('auth').replaceAll('"', "");
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    })

    return (
        <context.Provider
            value={{
            user,
            setUser,
            token,
            setToken,
            userPosts,
            setUserPosts,
            userAxios
            }}
        >
            {props.children}
        </context.Provider>
);
}

export {context, UserContextProvider}