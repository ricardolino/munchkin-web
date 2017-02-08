import { combineReducers } from 'redux';

import { playersReducer } from './playersReducer';

const rootReducer = combineReducers({
    players: playersReducer
});

export default rootReducer;
