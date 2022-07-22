import GameDetailRender from "./GameDetail"
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