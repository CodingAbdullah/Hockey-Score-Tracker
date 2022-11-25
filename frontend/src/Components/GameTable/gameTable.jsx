import React from 'react';

const GameTable = () => {
    const awayTeam = localStorage.getItem('state');
    const homeTeam = localStorage.getItem('stateTwo');

    // const awayTeam = useSelector(state => data);
    return (
        <div className="gameTable">

        </div>
    )
}

export default GameTable;