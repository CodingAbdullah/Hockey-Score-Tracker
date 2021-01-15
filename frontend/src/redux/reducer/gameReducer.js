import { GAME_DATA, INVALID_DATA } from '../action/types';

const intialState = {
    data: ''
}

const GameReducer = (state = intialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GAME_DATA:
            return {
                ...state,
                record: payload
            }
        
        case INVALID_DATA:
            return {
                ...state,
                record: payload
            }

        default:
            return state;
    }
}

export default GameReducer;