import { GAME_DATA, INVALID_DATA } from '../action/types';

const GameAction = (season, seasonDate, seasonType, awayTeam, homeTeam) => (dispatch) => {

    const options = {
        method: 'POST',
        body: JSON.stringify({season, seasonDate, seasonType, awayTeam, homeTeam}),
        headers : {
            'content-type': 'application/json'
        }
    };

    fetch('http://localhost:5050/form', options)
    .then(response => response.json())
    .then(res => {
        console.log(res);
        dispatch({
            type: GAME_DATA,
            payload: res
        });
    })
    .catch(err => {

        dispatch({
            type: INVALID_DATA,
            payload: err
        });
    });
}

export default GameAction;