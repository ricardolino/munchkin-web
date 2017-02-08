import { ADD_NEW_PLAYER, UPDATE_PLAYER } from '../actions/playersActions';

export function playersReducer (state = [], action) {
    switch (action.type) {
        case ADD_NEW_PLAYER:
            return [
                ...state,
                action.payload
            ]

        case UPDATE_PLAYER:
            return array.map( (item, index) => {
                if (index !== action.payload.index) {
                    return item;
                }

                return action.payload.data;
            });

        default:
            return state
    }
}
