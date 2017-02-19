export const WEB_SOCKET_URL = 'http://localhost:8081/';

class WebSocketUtils {
    static onEvent (socket, event, callback) {
        if (!socket._callbacks[`$${event}`]) {
            socket.on(`${event}`, (data) => {
                callback(data);
            })
        }
    }
}

export default WebSocketUtils;