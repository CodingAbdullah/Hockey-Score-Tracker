import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/combineReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = { data: '' };
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;