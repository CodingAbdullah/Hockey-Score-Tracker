import React from 'react';

const GameTitle = () => {
    const awayTeam = "Buffalo Sabres";
    const homeTeam = "Toronto Maple Leafs";
    const title = awayTeam + " " + homeTeam;

    return (
        <div className="gameTitle">
            <h1>{ title }</h1>
        </div>
    )
}

export default GameTitle;