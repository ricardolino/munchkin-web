import Component from 'inferno-component';
import { linkEvent } from 'inferno';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';

import PlayerInfo from './PlayerInfo';
import PlayerAttributes from './PlayerAttributes';

import WebSocketUtils from '../../Utils/WebSocketUtils';

import getRandomColor from '../../Utils/ColorUtils';

import { updatePlayer } from '../store/actions/playersActions';

class Player extends Component {
    constructor (props) {
        super(props);

        this.key = props.playerKey;
        this.socket = {};

        this.state = {
            showAttributes: !props.star
        }

        this._listenToWebSocketEvents();
    }

    _toggleAttributes (self) {
        self.setState((prevState, props) => {
            return {
                showAttributes: !prevState.showAttributes
            };
        })
    }

    _levelUpHandler (self) {
        let { updatePlayer } = self.props;
        let { level } = self.props.player;
        let playerData = {
            index: self.key,
            data: {
                level: parseInt(level + 1, 10)
            }
        }

        if (level <= 9) {
            self.socket.emit('player:update', playerData);
        }
    }

    _levelDownHandler (self) {
        let { updatePlayer } = self.props;
        let { level } = self.props.player;
        let playerData = {
            index: self.key,
            data: {
                level: parseInt(level - 1, 10)
            }
        }

        if (level > 1) {
            self.socket.emit('player:update', playerData);
        }
    }

    _gearUpHandler (self) {
        let { updatePlayer } = self.props;
        let { gear } = self.props.player;
        let playerData = {
            index: self.key,
            data: {
                gear: parseInt(gear + 1, 10)
            }
        }

        self.socket.emit('player:update', playerData);
    }

    _gearDownHandler (self) {
        let { updatePlayer } = self.props;
        let { gear } = self.props.player;
        let playerData = {
            index: self.key,
            data: {
                gear: parseInt(gear - 1, 10)
            }
        }

        if (gear > 0) {
            self.socket.emit('player:update', playerData);
        }
    }

    _changeTitleHandler (self, event) {
        let { updatePlayer } = self.props;
        let { name } = self.props.player;

        let message = `You\'ll remove ${name} from playing. Are you sure?`;

        let playerData = {
            index: self.key,
            data: {
                name: event.target.value,
                color: getRandomColor()
            }
        }

        self.socket.emit('player:update', playerData);
    }

    _renderAttributes (events, data) {
        if (!this.state.showAttributes) {
            return null;
        }

        return (
            <PlayerAttributes
                events={ events }
                data={ data } />
        )
    }

    _listenToWebSocketEvents () {
        let { updatePlayer } = this.props;
        this.socket = this.props.webSocket.socket;

        WebSocketUtils.onEvent(this.socket, 'player:update', updatePlayer);
    }

    render () {
        let playerAttributesEvents = {
            self: this,
            levelUp: this._levelUpHandler,
            levelDown: this._levelDownHandler,
            gearUp: this._gearUpHandler,
            gearDown: this._gearDownHandler
        }

        let playerInfoEvents = {
            self: this,
            changeTitle: this._changeTitleHandler,
            toggleAttributes: this._toggleAttributes
        }

        let data = this.props.players[this.key];

        return (
            <div className="player">
                <PlayerInfo
                    playerKey={ this.key }
                    events={ playerInfoEvents }
                    data={ data }
                    star={ this.props.star } />
                    { this._renderAttributes(playerAttributesEvents, data) }
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
    return bindActionCreators({ updatePlayer }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);



