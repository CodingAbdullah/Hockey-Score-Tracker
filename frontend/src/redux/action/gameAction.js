import { GAME_DATA, INVALID_DATA } from '../action/types';
import axios from "axios";

const GameAction =  (season, seasonDate, seasonType, awayTeam, homeTeam) => (dispatch) => {

    const options = {
        method: 'POST',
        body: JSON.stringify({season, seasonDate, seasonType, awayTeam, homeTeam}),
        headers : {
            'content-type': 'application/json'
        }
    };
    
    axios.post('http://localhost:5050/form', options)
    .then(response => {
        dispatch({
            type: GAME_DATA,
            payload: response
        });
    })
    .catch(err => {
        dispatch({
            type: INVALID_DATA,
            payload: err
        });
    })
}

export default GameAction;