import Component from 'inferno-component';
import { linkEvent } from 'inferno';
import { bindActionCreators } from 'redux';
import { connect } from 'inferno-redux';

import getRandomColor from '../../Utils/ColorUtils';
import { addNewPlayer } from '../store/actions/playersActions';

class NewPlayer extends Component {
    constructor(props) {
        super(props);

        this.socket = {};

        this._listenToWebSocketEvents();
    }

    _listenToWebSocketEvents () {
        this.socket = this.props.webSocket.socket;

        if (!this.socket._callbacks['$player:new']) {
            this.socket.on('player:new', (data) => {
                this.props.addNewPlayer(data);
            });
        }
    }

    _addNewPlayer (self, event) {
        let { socket } = self.props.webSocket;
        let playerData = {
            name: event.target.value,
            level: 1,
            gear: 0,
            power: 1,
            color: getRandomColor()
        };

        event.target.value = '';

        self.socket.emit('player:new', playerData);
    }

    render () {
        return (
            <div className="new-player">
                <input
                    className="new-player-name-field"
                    placeholder="New Player"
                    onChange={ linkEvent(this, this._addNewPlayer) } />
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        players: state.players,
        webSocket: state.webSocket
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ addNewPlayer }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlayer);
