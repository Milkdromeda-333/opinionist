import { createContext } from "react";
import { useState } from "react";

const context = createContext();

function UserContextProvider(props) {

    const [userState, setUserState] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <context.Provider value={{
            userState,
            setUserState,
            isLoggedIn,
            setIsLoggedIn
        }}>
            {props.children}
        </context.Provider>
);
}

export {context, UserContextProvider}