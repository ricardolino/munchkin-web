import Component from 'inferno-component';
import { linkEvent } from 'inferno';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';

import PlayerInfo from './PlayerInfo';
import PlayerAttributes from './PlayerAttributes';

import { updatePlayer } from '../store/actions/playersActions';

class Player extends Component {
    constructor (props) {
        super(props);

        this.key = props.playerKey;
        this.state = {
            showAttributes: false
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
        let { level, gear, name } = self.props.player;

        if (level <= 9) {
            updatePlayer({
                index: self.key,
                data: {
                    level: level + 1, gear, name
                }
            })
        }
    }

    _levelDownHandler (self) {
        let { updatePlayer } = self.props;
        let { level, gear, name } = self.props.player;

        if (level > 1) {
            updatePlayer({
                index: self.key,
                data: {
                    level: level - 1, gear, name
                }
            })
        }
    }

    _gearUpHandler (self) {
        let { updatePlayer } = self.props;
        let { level, gear, name } = self.props.player;

        updatePlayer({
            index: self.key,
            data: {
                gear: gear + 1, level, name
            }
        })
    }

    _gearDownHandler (self) {
        let { updatePlayer } = self.props;
        let { level, gear, name } = self.props.player;

        if (gear > 0) {
            updatePlayer({
                index: self.key,
                data: {
                    gear: gear - 1, level, name
                }
            })
        }
    }

    _changeTitleHandler (self, event) {
        let { updatePlayer } = self.props;
        let { level, gear, name } = self.props.player;

        updatePlayer({
            index: self.key,
            data: {
                name: event.target.value, gear, level
            }
        })
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



