import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'inferno-router';

import Player from '../Player/';
import DeletePlayerButton from '../Player/DeletePlayerButton/';
import Ranking from '../Ranking/';

import WebSocketUtils from '../../Utils/WebSocketUtils';

import { deletePlayer } from '../store/actions/playersActions';

class PlayerView extends Component {
    constructor(props) {
        super(props);

        this.socket = {};

        this._listenToWebSocketEvents();
    }

    _deletePlayerHandler (self, event) {
        let { deletePlayer } = self.props;
        let message = `You\'ll remove ${name} from playing. Are you sure?`;

        event.target.blur();

        if (confirm(message)) {
            window.history.back();
            return self.socket.emit('player:delete', self.props.params.playerId);
        }
    }

    _listenToWebSocketEvents () {
        let  { deletePlayer } = this.props;
        this.socket = this.props.webSocket.socket;

        WebSocketUtils.onEvent(this.socket, 'player:delete', deletePlayer);
    }

    render () {
        let { players, params } = this.props;
        let { playerId } = params;
        let player = players[playerId];
        let events = {
            self: this,
            deletePlayer: this._deletePlayerHandler
        }

        return (
            <div className="view-player">
                <div className="content">
                    <Player
                        playerKey={ parseInt(playerId, 10) }
                        player={ player } />
                </div>
                <div className="sidebar">
                    <Ranking
                        players={ this.props.players } />

                    <DeletePlayerButton
                        events={ events } />
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        webSocket: state.webSocket,
        players: state.players
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ deletePlayer }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerView);



