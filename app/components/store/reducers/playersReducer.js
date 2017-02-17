import { ADD_NEW_PLAYER, UPDATE_PLAYER, DELETE_PLAYER, SYNC_ALL_PLAYERS } from '../actions/playersActions';

export function playersReducer (state = [], action) {
    switch (action.type) {
        case ADD_NEW_PLAYER:
            return [
                ...state,
                action.payload
            ]

        case UPDATE_PLAYER:
            let { index, data } = action.payload;
            let dataWithPower = {};

            return state.map((item, i) => {
                if (i !== index) {
                    return item;
                }

                if (data.level) {
                    dataWithPower.power = parseInt(data.level + item.gear, 10);
                }

                if (data.gear) {
                    dataWithPower.power = parseInt(data.gear + item.level, 10);
                }

                return {
                    ...item,
                    ...data,
                    ...dataWithPower
                }
            });

        case DELETE_PLAYER:
            return state.filter((player, index) => {
                return (index !== parseInt(action.payload, 10));
            })

        case SYNC_ALL_PLAYERS:
            return action.payload;

        default:
            return state
    }
}
