
export default function MostControversial ({cb, activeBtns, setActiveBtns}) {
    
    const handleClick = () => {
        cb();
        setActiveBtns({
            newestFirst: false,
            oldestFirst: false,
            mostControversial : true,
            mostPopular: false
        })
    }

    return (
        <button
            className={`
            border-2 rounded
            px-4 py-2
            ${activeBtns.mostControversial ? ' hover:bg-my-dark-blue-tone':'hover:bg-my-light-blue-tone'}
            ${activeBtns.mostControversial  ? 'bg-my-dark-blue': 'bg-my-light-blue'}
            `}
            onClick={handleClick}
            >
                most controversial 
            </button>
    )
}