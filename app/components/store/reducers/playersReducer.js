import { ADD_NEW_PLAYER, UPDATE_PLAYER } from '../actions/playersActions';

export function playersReducer (state = [], action) {
    switch (action.type) {
        case ADD_NEW_PLAYER:
            return [
                ...state,
                action.payload
            ]

        case UPDATE_PLAYER:
            let { index, data } = action.payload;

            return state.map((item, i) => {
                if (i !== index) {
                    return item;
                }

                return {
                    ...item,
                    ...data
                }
            });

        default:
            return state
    }
}
