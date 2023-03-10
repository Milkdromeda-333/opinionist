import { useContext } from "react";
import { context } from "./context/User";

import {formatDate} from './utils/formatDate';

export default function ProfilePreview(){

    const { user, userPosts } = useContext(context);

    return (
        <div className='
            w-full p-4
            bg-my-light-blue-tone text-my-cream
            h-min
            sticky
            max-lg:hidden top-[85px] right-0'
        >
            <div className="flex flex-row justify-between">
                <div className='
                    flex flex-row justify-start items-center gap-2'
                >
                    <img
                            src={`https://ui-avatars.com/api/?name=${user.username}&rounded=true`} alt='avater'
                            className='w-10'
                    />
                    <span>@{user.username}</span>
                
                </div>
                <span>Member since: { formatDate(user.memberSince) }</span>
            </div>

            <section>
                <p>Number of posts: {userPosts.length}</p>
                <p>Total recieved likes: {user.recievedLikes}</p>
            </section>
        </div>
    )
}