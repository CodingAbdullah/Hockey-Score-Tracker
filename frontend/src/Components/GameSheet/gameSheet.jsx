import GameTitle from '../GameTitle/gameTitle';
import GameTable from '../GameTable/gameTable';
import { useNavigate } from 'react-router';

const GameSheet = () => {
    const navigate = useNavigate();
    const homeTeam = localStorage.getItem('data');

    if ( homeTeam === undefined || homeTeam === null ) {
        navigate('/gameSheet');
    }
    else {
        return (
            <div className="gameSheet">
                { homeTeam }
                <GameTitle />
                <GameTable />
            </div>
        )
    }
}

export default GameSheet;