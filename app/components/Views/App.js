import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';

import io from 'socket.io-client';

import WebSocketUtils, { WEB_SOCKET_URL } from '../../Utils/WebSocketUtils';

import { createWebSocketInstance } from '../store/actions/webSocketActions';

class App extends Component {
    constructor(props) {
        super(props);

        props.createWebSocketInstance(io(WEB_SOCKET_URL));

        this.socket = {};
    }

    _listenToWebSocketEvents () {
        this.socket = this.props.webSocket.socket;


        WebSocketUtils.onEvent(this.socket, 'connect', (data) => {
            console.log('Client has connected to the server!');
        });

        WebSocketUtils.onEvent(this.socket, 'disconnect', (data) => {
            console.log('The client has disconnected!');
        });
    }

    componentDidUpdate (prevProps, prevState) {
        if (this.props.webSocket.socket) {
            this._listenToWebSocketEvents();
        }
    }

    render () {
        if (!this.socket) {
            return <h1>Loading...</h1>;
        }

        return (
            <div className="app">{ this.props.children }</div>
        )
    }
}

function mapStateToProps (state) {
    return {
        webSocket: state.webSocket
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ createWebSocketInstance }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



