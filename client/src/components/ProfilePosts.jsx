import { useState } from "react";
import Post from './Post';

export default function ProfilePosts({userPosts, userComments}){

    const [isActive, setIsActive] = useState({
        posts: true,
        comments: false
    });

    const toggleToPosts = () => {
        setIsActive({
            posts: true,
            comments: false
        })
    }

    const toggleToComments = () => {
        setIsActive({
            posts: false,
            comments: true
        })
    }

    return (
        <section className='text-my-cream w-full md:w-2/3'>
            
            {/* header */}
            <div
                className='
                bg-my-dark-blue
                p-2'
            >
                <button
                    onClick={toggleToPosts }
                    className={`
                    rounded-full
                    px-2 py-1 mr-2
                    outline-1
                    ${isActive.posts && 'bg-my-light-blue'}
                    hover:bg-my-light-blue hover:outline
                `}>
                    Posts
                </button>

                <button
                    onClick={toggleToComments } className={`
                    rounded-full
                    px-2 py-1
                    outline-1
                    ${isActive.comments && 'bg-my-light-blue'}
                    hover:bg-my-light-blue hover:outline
                `}>
                    Comments
                </button>

            </div>

            {/* contents */}
            <div
                className='
                w-full mt-4
                border-2
                flex flex-col items-center gap-4'
            >
                {isActive.posts ?
                    userPosts.map(post => <Post {...post} key={post._id} />) :
                    userComments.map(post => <Post {...post} key={post._id} />)
                }
            </div>

        </section>
    )
}