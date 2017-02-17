import { linkEvent } from 'inferno';
import Component from 'inferno-component';
import { bindActionCreators } from 'redux';
import { connect } from 'inferno-redux';

import Player from '../Player/';
import NewPlayer from '../Player/NewPlayer';
import SyncPlayersButton from '../Player/SyncPlayersButton';
import Ranking from '../Ranking/';
import { addNewPlayer } from '../store/actions/playersActions';

class TableView extends Component {
    constructor(props) {
        super(props);

        this.socket = {};

        this._listenToWebSocketEvents();
    }

    _listenToWebSocketEvents () {
        this.socket = this.props.webSocket.socket;
    }

    _syncPlayersHandler (self, event) {
        let { players } = self.props;

        self.socket.emit('player:sync', players);
    }

    _renderSyncButton (events) {
        if (this.props.players.length <= 1) {
            return null;
        }

        return (
            <SyncPlayersButton
                events={ events } />
        )
    }

    render () {
        let events = {
            self: this,
            syncPlayers: this._syncPlayersHandler
        }
        return (
            <div className="view-table">
                <div className="content">
                    {
                        this.props.players.map((player, key) => {
                            return (
                                <Player
                                    playerKey={key}
                                    player={ player }
                                    star />
                            )
                        })
                    }
                    <NewPlayer />
                </div>
                <div className="sidebar">
                    <Ranking
                        players={ this.props.players } />

                    { this._renderSyncButton(events) }
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        players: state.players,
        webSocket: state.webSocket
    }
}

export default connect(mapStateToProps, null)(TableView);
