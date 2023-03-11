import { useContext, useEffect } from "react";

import { context } from '../components/context/User';
import ProfileCard from '../components/ProfileCard';
import ProfilePosts from '../components/ProfilePosts';

export default function Profile() {

    const { user, 
            userComments,
            userPosts } = useContext(context);


    return (
        <div className="
        pt-20
        mx-4
        min-h-full
        grid grid-cols-[2fr_1fr] gap-4"
        >
            <ProfilePosts userPosts={userPosts} userComments={userComments} />

            <ProfileCard user={user} userPostsNum={userPosts.length} userCommentsLength={userComments.length} />

        </div>
    )
}

/*







*/