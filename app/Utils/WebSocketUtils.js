export const WEB_SOCKET_URL = 'http://socket.ricardolino.com.br/';

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