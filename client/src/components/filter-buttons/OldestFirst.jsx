
export default function OldesFirst({cb,activeBtns, setActiveBtns}){
const handleClick = () => {
        cb();
        setActiveBtns({
            newestFirst: false,
            oldestFirst: true,
            mostControversial : false,
            mostPopular: false
        })
    }
    return (<button
             className={`
            border-2 rounded
            px-4 py-2
            ${activeBtns.oldestFirst ? ' hover:bg-my-dark-blue-tone': 'hover:bg-my-light-blue-tone'}
            ${activeBtns.oldestFirst  ? 'bg-my-dark-blue': 'bg-my-light-blue'}
            `}
            onClick={handleClick}
            >
                oldest first
            </button>
    )
}