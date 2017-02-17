import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';

import io from 'socket.io-client';

import { updatePlayer, deletePlayer, syncAllPlayers } from '../store/actions/playersActions';
import { createWebSocketInstance } from '../store/actions/webSocketActions';

const WEB_SOCKET_URL = 'http://socket.ricardolino.com.br/';

class App extends Component {
    constructor(props) {
        super(props);

        props.createWebSocketInstance(io(WEB_SOCKET_URL));

        this.socket = {};
    }

    _listenToWebSocketEvents () {
        this.socket = this.props.webSocket.socket;

        if (!this.socket._callbacks['$connect']) {
            this.socket.on('connect', () => {
                console.log('Client has connected to the server!');
            });
        }

        if (!this.socket._callbacks['$player:update']) {
            this.socket.on('player:update', (data) => {
                this.props.updatePlayer(data);
            });
        }

        if (!this.socket._callbacks['$player:delete']) {
            this.socket.on('player:delete', (data) => {
                this.props.deletePlayer(data);
            });
        }

        if (!this.socket._callbacks['$player:sync']) {
            this.socket.on('player:sync', (data) => {
                this.props.syncAllPlayers(data);
            });
        }

        if (!this.socket._callbacks['$disconnect']) {
            this.socket.on('disconnect', () => {
                console.log('The client has disconnected!');
            });
        }
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
    return bindActionCreators({ updatePlayer, deletePlayer, syncAllPlayers, createWebSocketInstance }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



