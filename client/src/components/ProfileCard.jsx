import { formatDate } from './utils/formatDate'

export default function ProfileCard({user, userCommentsLength, userPostsNum}){

    return (
        <section
            className='
            w-full
            bg-my-dark-blue text-my-cream
            md:w-1/3'
        >
            <div className='
            bg-my-light-blue-tone
            w-full px-4 py-2
            flex flex-row justify-start items-center gap-1'>
                <img
                    src={`https://ui-avatars.com/api/?name=${user.username}&rounded=true`} alt='avater'
                    className='w-10'
                />

                <span>@{user.username}</span>

                <span className='ml-auto'>{formatDate(user.memberSince)}</span>
                
            </div>

            <div
                className='p-4 
                flex flex-col gap-4'
            >
                <span>Number of comments: {userCommentsLength}</span>
                <span>Number of posts: {userPostsNum} </span>
            </div>

            
        </section>
    )
}