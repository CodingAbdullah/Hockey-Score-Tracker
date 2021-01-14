import { GAME_DATA, INVALID_DATA } from '../action/types';

const initialState = {
    data: ''
}

const GameReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GAME_DATA:

            return {
                ...state,
                data: payload
            }
        
        case INVALID_DATA:

            return {
                ...state,
                data: payload
            }
        
        default:
            return state;
    }
}

export default GameReducer;