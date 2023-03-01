import { createContext } from 'react';
import { useState } from 'react';

const context = createContext();

function UserContextProvider(props) {

    const userDefaults = {
        username: '',
        id: ''
    }

    const [user, setUser] = useState(userDefaults);

    const [token, setToken] = useState(localStorage.getItem('auth'));

    return (
        <context.Provider value={{
            user,
            setUser,
            token,
            setToken
        }}>
            {props.children}
        </context.Provider>
);
}

export {context, UserContextProvider}