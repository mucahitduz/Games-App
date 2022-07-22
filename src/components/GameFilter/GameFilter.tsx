import React, { ChangeEvent, FC } from 'react'
import { GENRES, PLATFORMS, SORT_BY, TAGS } from './constants'
import "../../styles/GameFilter.css"

interface GameFilterProps { 
    onChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameFilter:FC<GameFilterProps> = ({onChange}) => {
  return (
      <form className='filter-form' onChange={onChange}>
          <label className='filter-label' htmlFor="platform-select">
              Platform:
              <select className='filter-select' name="platform" id="platform-select">
                  {PLATFORMS.map(platform => (
                      <option key={platform.value} value={platform.value}>{platform.display}</option>
                  ))}
              </select>
          </label>

          <label className='filter-label' htmlFor="genre-select">
              Genre:
              <select className='filter-select' name="genre" id="genre-select">
                  {GENRES.map(genre => (
                      <option key={genre.value} value={genre.value}>{genre.display}</option>
                  ))}
              </select>
          </label>

          <label className='filter-label' htmlFor="tag-select">
              Tag:
              <select className='filter-select' name="tag" id="tag-select">
                  {TAGS.map(tag => (
                      <option key={tag.value} value={tag.value}>{tag.display}</option>
                  ))}
              </select>
          </label>

          <label className='filter-label' htmlFor="sortBy-select">
              Sort By:
              <select className='filter-select' name="sortBy" id="sortBy-select">
                  {SORT_BY.map(sortBy => (
                      <option key={sortBy.value} value={sortBy.value}>{sortBy.display}</option>
                  ))}
              </select>
          </label>
    </form>
  )
}

export default GameFilter