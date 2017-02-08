export const ADD_NEW_PLAYER = 'ADD_NEW_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';

export function addNewPlayer (payload) {
    return {
        type: ADD_NEW_PLAYER,
        payload
    }
}

export function updatePlayer (payload) {
    return {
        type: UPDATE_PLAYER,
        payload
    }
}
