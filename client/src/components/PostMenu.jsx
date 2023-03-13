import { userAxios } from './utils/axiosHandlers.js'
import { appContext } from './context/App';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { context } from './context/User';

export default function PostMenu({ postId }) {
    
    const { updateFeed } = useContext(appContext);
    const { getUserPosts } = useContext(context);
    const location = useLocation();

    const deletePost = () => {
        userAxios.delete(`/api/posts/delete/${postId}`)
            .then(() => {
                if (location.pathname === '/profile') {
                    getUserPosts();
                } else {
                    updateFeed();
                }
            })
            .catch(err => {
            console.log(err)
        })
    }

    return (
        <div
            className='
            w-[100px]
            border-2
            absolute top-0 right-10 z-0
            bg-gray-400'
        >
            <button
                className='
                w-full
                hover:bg-gray-500
                active:bg-gray-600'

                onClick={deletePost}
            > delete post </button>

        </div>
    )
}