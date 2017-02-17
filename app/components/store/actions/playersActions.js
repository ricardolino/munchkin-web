export const ADD_NEW_PLAYER = 'ADD_NEW_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export const DELETE_PLAYER = 'DELETE_PLAYER';
export const SYNC_ALL_PLAYERS = 'SYNC_ALL_PLAYERS';

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

export function deletePlayer (payload) {
    return {
        type: DELETE_PLAYER,
        payload
    }
}

export function syncAllPlayers (payload) {
    return {
        type: SYNC_ALL_PLAYERS,
        payload
    }
}
