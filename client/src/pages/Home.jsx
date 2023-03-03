
import Post from '../components/Post';
import { useContext, useEffect } from 'react';
import { appContext } from '../components/context/App';
import {getAllPosts} from '../components/utils/userAxios'

export default function Home() {
    
    const {allPosts, setAllPosts} = useContext(appContext);
    const postsArr = allPosts.map(data => <Post {...data} key={data.title} />)
    
    
    useEffect(() => {
       getAllPosts()
    }, [])

    return (
        // <Layout >
        <main className='
        w-full 
        grid grid-cols-1
        px-4
        pt-16
        md:grid-cols-3 md:pt-24'
        >

            <h1 className='text-2xl m-4'>Feed:</h1>

            <div className='
            flex flex-col justify-center items-center gap-6
            '>
                {postsArr}
            </div>


            </main>
    )
}