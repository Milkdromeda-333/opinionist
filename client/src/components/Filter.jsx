import NewestFirst from "./filter-buttons/NewestFirst"
import OldestFirst from "./filter-buttons/OldestFirst"
import MostContraversial from "./filter-buttons/MostContraversial"
import MostPopular from "./filter-buttons/MostPopular"

import { appContext } from "./context/App"
import { useContext } from "react";

export default function Filter() {

    const { newestFirst,
        oldestFirst,
        popularFirst,
        mostContraversal } = useContext(appContext);

    return (
        <div
            className='
            bg-my-light-blue
            w-full
            rounded-full
            mb-4
            p-2
            text-my-cream
            flex flex-row justify-center items-center gap-4'
        >
            
            <NewestFirst cb={newestFirst} />
            <OldestFirst cb={oldestFirst} />
            <MostPopular cb={popularFirst} />
            <MostContraversial cb={mostContraversal} />
            
        </div>
    )
}