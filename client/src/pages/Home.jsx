
import Post from '../components/Post';
import { useContext } from 'react';
import { appContext } from '../components/context/App';

export default function Home() {
    
    const {posts} = useContext(appContext);
    const postsArr = posts.map(data => <Post {...data} key={data.title} />)
    
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