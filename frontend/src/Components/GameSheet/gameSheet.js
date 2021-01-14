import LogoBox from '../LogoBox/logobox';
import GameTitle from '../GameTitle/gameTitle';
import { useSelector } from 'react-redux';

import GameTable from '../GameTable/gameTable';

const GameSheet = () => {
    const homeTeam = useSelector(state => state.data);
    const awayTeam = useSelector(state => state.data);

        return (
            <div className="gameSheet">
                <GameTitle />
                <LogoBox awayTeam={homeTeam} homeTeam={awayTeam} />
                <GameTable />
            </div>
        )
}

export default GameSheet;