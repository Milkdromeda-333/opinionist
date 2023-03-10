import { userAxios } from './utils/axiosHandlers.js'
import { appContext } from './context/App';
import { useContext } from 'react';

export default function PostMenu({ postId }) {
    
    const { setAllPosts } = useContext(appContext);

    const deletePost = () => {
        userAxios.delete(`/api/posts/delete/${postId}`)
            .then(res => {
                console.log("Post successfully deleted." + res.data);

                userAxios.get('/api/posts')
                    .then(res => setAllPosts(res.data))
                    .catch(err => {
                        console.log(err);
                    });
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