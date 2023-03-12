import Post from '../components/Post';
import { useContext, useEffect, useState } from 'react';
import { appContext } from '../components/context/App';
import Filter from '../components/Filter';
import FilterMobile from '../components/FilterMobile';

export default function Home() {
    
    const { allPosts, updateFeed } = useContext(appContext);
    
    const postsArr = allPosts.map(data => <Post {...data} key={data.title} />)
    
    useEffect(() => {
        updateFeed();
    }, [])

    return (
        <main className='
        px-4
        pt-20'
        >
            
            <FilterMobile  />

            <Filter />

            <div className='
            w-full
            mx-auto
            md:w-[40%]
            flex flex-col justify-center gap-6
            '>
                {postsArr ? postsArr : "No posts. Maybe, make one yourself!"}
            </div>


            </main>
    )
}