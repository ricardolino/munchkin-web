export const CREATE_SOCKET_INSTANCE = 'CREATE_SOCKET_INSTANCE';

export function createWebSocketInstance (payload) {
    return {
        type: CREATE_SOCKET_INSTANCE,
        payload
    }
}
