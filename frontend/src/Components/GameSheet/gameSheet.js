import LogoBox from '../LogoBox/logobox';
import GameTitle from '../GameTitle/gameTitle';
import { useSelector } from 'react-redux';

import GameTable from '../GameTable/gameTable';

const GameSheet = () => {
    const homeTeam = useSelector(state => state.data);

        return (
            <div className="gameSheet">
                { homeTeam }
                <GameTitle />
                <GameTable />
            </div>
        )
}

export default GameSheet;