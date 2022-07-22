import  { FC } from 'react'
import { GameDetailType } from '../../types/types';
import "../../styles/GameDetail.css"

export interface GameDetailProps { 
    details?: GameDetailType;
}

const GameDetail: FC<GameDetailProps> = ({ details }) => {
    if (!details) {
        return <p>Game unavailable.</p>
    }
  return (    
      <div className='details'>
          <h1 className='detail-title'>{details.title}</h1>
        <div className='row'>
            <div className='detail' >
                <img className='detail-img' src={details.thumbnail} alt={details.title} />
            </div>  
            <div className='desc'>
                <p className='detail-genre'>Genre : {details.genre}</p>              
                <p className='detail-platform'>Platform : {details.platform}</p>              
                <p className='detail-publisher'>Publisher : {details.publisher}</p>
                <p className='detail-developer'>Developer : {details.developer}</p>
                <p className='detail-date'>Release Date : {details.release_date}</p>
            </div>
        </div>   
          <p className='detail-desc'>{details.description}</p>
          <div >{details.screenshots.map((shot) => {
              return <img className='detail-screenshot' key={shot.id} src={shot.image} alt={details.title} />
          })}</div>
          
    </div>
  )
}

export default GameDetail