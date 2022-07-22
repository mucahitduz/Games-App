import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import GameDetail from '../../components/GameDetail/GameDetail.container'

type GameParams = {
    id: string
}

const Detail = ():ReactElement => {
    const {id} = useParams<GameParams>();

    return <GameDetail gameId={id as string} />}

export default Detail