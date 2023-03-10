
export default function MostPopular({cb,activeBtns, setActiveBtns}) {
    const handleClick = () => {
        cb();
        setActiveBtns({
            newestFirst: false,
            oldestFirst: false,
            mostControversial : false,
            mostPopular: true
        })
    }
    return (
        <button
             className={`
            border-2 rounded
            px-4 py-2
            ${activeBtns.mostPopular ? ' hover:bg-my-dark-blue-tone': 'hover:bg-my-light-blue'}
            ${activeBtns.mostPopular  ? 'bg-my-dark-blue': 'bg-my-light-blue'}
            `}
            onClick={handleClick}
            >
                most popular
            </button>
    )
}