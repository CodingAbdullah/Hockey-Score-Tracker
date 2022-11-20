import GameTitle from '../GameTitle/gameTitle.jsx';
import GameTable from '../GameTable/gameTable';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const GameSheet = () => {
    const navigate = useNavigate();
    const homeTeam = localStorage.getItem('data');

    useEffect(() => {
        if ( homeTeam === undefined || homeTeam === null ) {
            navigate('/');
        }
    }, []);

    return (
        <div className="gameSheet">
            { homeTeam }
            <GameTitle />
            <GameTable />
        </div>
    )
}

export default GameSheet;