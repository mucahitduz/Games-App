import { ChangeEvent, FC } from 'react'
import { Game } from '../../types/types'
import GameCard from '../GameCard/GameCard'
import "../../styles/GameList.css"
import GameFilter from '../GameFilter/GameFilter'

interface GameListProps {
    games: Game[]
    onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameList: FC<GameListProps> = ({ games, onFilterChange }) => {     
    if(!games?.length) {
        return <p>No games available</p>
    }
    return (
        <>
        <GameFilter onChange={onFilterChange} />
        <div className='games-ul'>
            {games.map(game => (
                <div className='games-li' key={game.id}>
                    <GameCard content={game} />
                </div>
            ))}
            </div>
            </>
    )
}

export default GameList