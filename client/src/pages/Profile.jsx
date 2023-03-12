import { useContext, useEffect } from "react";

import { context } from '../components/context/User';
import ProfileCard from '../components/ProfileCard';
import ProfilePosts from '../components/ProfilePosts';

export default function Profile() {

    const { user, 
            userComments,
            userPosts } = useContext(context);


    return (
        <div className='
        pt-20
        mx-4
        flex flex-col-reverse  jusify-center items-start gap-4
        md:gap-16
        md:flex-row md:justify-between'
        >
            <ProfilePosts userPosts={userPosts} userComments={userComments} />

            <ProfileCard user={user} userPostsNum={userPosts.length} userCommentsLength={userComments.length} />

        </div>
    )
}

/*







*/