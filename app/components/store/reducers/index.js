import { combineReducers } from 'redux';

import { playersReducer } from './playersReducer';
import { webSocketReducer } from './webSocketReducer';

const rootReducer = combineReducers({
    players: playersReducer,
    webSocket: webSocketReducer
});

export default rootReducer;
