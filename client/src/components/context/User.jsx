import { createContext } from 'react';
import { useState } from 'react';

const context = createContext();

function UserContextProvider(props) {

    const [user, setUser] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <context.Provider value={{
            user,
            setUser,
            isLoggedIn,
            setIsLoggedIn
        }}>
            {props.children}
        </context.Provider>
);
}

export {context, UserContextProvider}