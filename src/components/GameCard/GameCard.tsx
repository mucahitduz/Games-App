import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Game } from '../../types/types'
import "../../styles/GameCard.css"

interface GameCardProps {
    content: Game
}

const GameCard: FC<GameCardProps> = ({ content }) => {
    const { id, title, thumbnail, short_description, genre, platform } = content   
    
  return (
      <Link className='game-card' to={`/game/${id}`}>
          <img className='game-img' alt={`${title} logo`} src={thumbnail}></img>
          <div className='game-details'>
            <h2 className='game-title'>{title}</h2>
            <p className='game-description'>{short_description}</p>
            <p className='game-genre'>{genre}</p>
              <p className='game-platform'>{platform}</p>
          </div>          
      </Link>
  )
}

export default GameCard