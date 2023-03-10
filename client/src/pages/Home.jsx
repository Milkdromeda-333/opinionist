import Post from '../components/Post';
import { useContext, useEffect, useState } from 'react';
import { appContext } from '../components/context/App';
import Filter from '../components/Filter';
import FilterMobile from '../components/FilterMobile';
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';

export default function Home() {
    
    const { allPosts, updateFeed } = useContext(appContext);
    
    const postsArr = allPosts.map(data => <Post {...data} key={data.title} />)

    const [isMobileFilterActive, setIsMobileFilterActive] = useState(false);

    const toggleFilterMobile = () => {
        setIsMobileFilterActive(prev => !prev);
    }
    
    
    useEffect(() => {
        updateFeed();
    }, [])

    return (
        <main className='
        px-4
        pt-20'
        >
            
            <div className='w-full flex flex-col justify-center items-center my-4 relative md:hidden'>
                <div className="text-my-dark-blue rounded-full bg-white p-4 flex flex-row justify-between items-center w-full"  onClick={toggleFilterMobile}>
                    <span>
                        Sort by :</span>
                    {isMobileFilterActive ? <BiUpArrow/>:<BiDownArrow />}
                </div>
                {isMobileFilterActive && <FilterMobile toggleFilterMobile={toggleFilterMobile} />}
            </div>

            <Filter />

            <div className='
            w-full
            mx-auto
            md:w-1/3
            flex flex-col justify-center items-center gap-6
            '>
                {postsArr ? postsArr : "No posts. Maybe, make one yourself!"}
            </div>


            </main>
    )
}