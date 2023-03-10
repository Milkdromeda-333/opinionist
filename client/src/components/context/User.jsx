import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { userAxios } from '../utils/axiosHandlers';

const context = createContext();

function UserContextProvider(props) {

    const [user, setUser] = useState({...JSON.parse(localStorage.getItem('user')), recievedLikes: 0});

    const [token, setToken] = useState(localStorage.getItem('auth'));

    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        userAxios.get(`/api/posts/user/${user._id}`)
            .then(res => {
                setUserPosts(res.data);
                setUserPosts(state => {
                let num = 0;
                state.forEach(elem => {
                    console.log(elem)
                    num += elem.upvotes.length
                })
        
                setUser(prev => ({
                    ...prev,
                    recievedLikes: num
                }))
                return state;
                }
                
            )})
            .catch(err => console.log(err));

    }, []);
    

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