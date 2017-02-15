import Component from 'inferno-component';
import { linkEvent } from 'inferno';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';

import PlayerInfo from './PlayerInfo';
import PlayerAttributes from './PlayerAttributes';
import getRandomColor from '../../Utils/ColorUtils';

import { updatePlayer } from '../store/actions/playersActions';

class Player extends Component {
    constructor (props) {
        super(props);

        this.key = props.playerKey;
        this.state = {
            showAttributes: true
        }
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
        let { level, power } = self.props.player;
        let playerData = {
            index: self.key,
            data: {
                level: parseInt(level + 1, 10),
                power: parseInt(power + 1, 10)
            }
        }

        if (level <= 9) {
            webSocketIo.emit('player:update', playerData);
            // updatePlayer(playerData);
        }
    }

    _levelDownHandler (self) {
        let { updatePlayer } = self.props;
        let { level, power } = self.props.player;
        let playerData = {
            index: self.key,
            data: {
                level: parseInt(level - 1, 10),
                power: parseInt(power - 1, 10)
            }
        }

        if (level > 1) {
            webSocketIo.emit('player:update', playerData);
            // updatePlayer(playerData);
        }
    }

    _gearUpHandler (self) {
        let { updatePlayer } = self.props;
        let { gear, power } = self.props.player;
        let playerData = {
            index: self.key,
            data: {
                gear: parseInt(gear + 1, 10),
                power: parseInt(power + 1, 10)
            }
        }

        webSocketIo.emit('player:update', playerData);
        // updatePlayer(playerData);
    }

    _gearDownHandler (self) {
        let { updatePlayer } = self.props;
        let { gear, power } = self.props.player;
        let playerData = {
            index: self.key,
            data: {
                gear: parseInt(gear - 1, 10),
                power: parseInt(power - 1, 10)
            }
        }

        if (gear > 0) {
            webSocketIo.emit('player:update', playerData);
            // updatePlayer(playerData);
        }
    }

    _changeTitleHandler (self, event) {
        let { updatePlayer } = self.props;
        let playerData = {
            index: self.key,
            data: {
                name: event.target.value,
                color: getRandomColor()
            }
        }

        webSocketIo.emit('player:update', playerData);
        // updatePlayer(playerData);
    }

    renderAttributes (events, data) {
        if (!this.state.showAttributes) {
            return null;
        }

        return (
            <PlayerAttributes
                events={ events }
                data={ data } />
        )
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
                    events={ playerInfoEvents }
                    data={ data } />
                    { this.renderAttributes(playerAttributesEvents, data) }
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        players: state.players
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ updatePlayer }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);



