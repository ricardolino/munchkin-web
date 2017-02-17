import { CREATE_SOCKET_INSTANCE } from '../actions/webSocketActions';

export function webSocketReducer (state = {}, action) {
    switch (action.type) {
        case CREATE_SOCKET_INSTANCE:
            return {
                ...state,
                socket: action.payload
            }

        default:
            return state
    }
}
