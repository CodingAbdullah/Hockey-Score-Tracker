import axios from "axios";

const GameAction = async (season, seasonDate, seasonType, awayTeam, homeTeam) => {

    const options = {
        method: 'POST',
        body: JSON.stringify({season, seasonDate, seasonType, awayTeam, homeTeam}),
        headers : {
            'content-type': 'application/json'
        }
    };

    const result = await axios.post('http://localhost:5050/form', options);
    
    if (result !== undefined) {
        return {
            type: "INVALID_DATA",
            payload: result
        }
    }
    else {
        return {
            type: "GAME_DATA",
            payload: result
        }
    }
}

export default GameAction;