import { GAME_DATA, INVALID_DATA } from '../action/types';
import axios from 'axios';

const GameAction = (season, seasonDate, seasonType, awayTeam, homeTeam) => (dispatch) => {

    const body = JSON.stringify({season, seasonDate, seasonType, awayTeam, homeTeam})

    const config = {
        headers : {
            'content-type': 'application/json'
        }
    };

    axios.post('http://localhost:5050/form', body, config)
    .then(response => {
        console.log(response.data);

        dispatch({
            type: GAME_DATA,
            payload: response.data
        });
    })
    .catch(err => {
        console.log("Error exists while trying to register user " + err);

        dispatch({
            type: INVALID_DATA,
            payload: null
        });
    });
}

export default GameAction;