import { ChangeEvent, useCallback, useState } from 'react'
import useFetch from '../../hooks/useFetch/useFetch'
import { Filter } from '../../types/types'
import GameListRender from './GameList'

const GameList = () => {
    const [filter, setFilter] = useState<Filter>({ platform: 'pc', sortBy: 'relevance' })  
    const {games} = useFetch(filter)
    
    const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
        setFilter(current => ({
            ...current, [e.target.name]: e.target.value
        }))
        e.preventDefault();
    },[])

  return (
      <div>
          <GameListRender games={games} onFilterChange={onFilterChange}  />
    </div>
  )
}

export default GameList
