import { useEffect, useState } from 'react'
import axios from 'axios'
import { Game } from '../../types/types'
import GameDetailRender from "./GameDetail"
import { API_HOST, API_KEY } from '../GameList/constants'
import useDetail from '../../hooks/useDetail/useDetail'

interface Props {
    gameId: string
}

const GameDetailContainer = (props: Props) => {
    const { gameId } = props
    const { details } = useDetail(gameId);
    
   
      
    
  return (
      <div>
          <GameDetailRender details={details}  />
      </div>
  )
}

export default GameDetailContainer