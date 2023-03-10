import NewestFirst from "./filter-buttons/NewestFirst"
import OldestFirst from "./filter-buttons/OldestFirst"
import MostControversial  from "./filter-buttons/MostControversial"
import MostPopular from "./filter-buttons/MostPopular"

import { appContext } from "./context/App"
import { useContext, useState } from "react";

export default function Filter() {

    const { newestFirst,
        oldestFirst,
        popularFirst,
        mostControversial  } = useContext(appContext);
    

    const btnsDefaults = {
        newestFirst: true,
        oldestFirst: false,
        mostControversial : false,
        mostPopular: false
    }
    const [activeBtns, setActiveBtns] = useState(btnsDefaults);

    return (
        <div
            className='
            w-full
            rounded-full
            mb-4
            p-2
            text-my-cream
            hidden
            flex-row justify-center items-center gap-4 flex-wrap
            md:flex'
        >
            <span className='text-my-dark-blue'>Sort by:</span>
            <NewestFirst cb={newestFirst} activeBtns={activeBtns} setActiveBtns={setActiveBtns} />
            <OldestFirst cb={oldestFirst} activeBtns={activeBtns} setActiveBtns={setActiveBtns} />
            <MostPopular cb={popularFirst} activeBtns={activeBtns} setActiveBtns={setActiveBtns} />
            <MostControversial  cb={mostControversial } activeBtns={activeBtns} setActiveBtns={setActiveBtns} />
            
        </div>
    )
}