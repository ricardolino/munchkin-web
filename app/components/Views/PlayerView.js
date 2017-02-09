import { linkEvent } from 'inferno';
import Component from 'inferno-component';
import { bindActionCreators } from 'redux';
import { connect } from 'inferno-redux';

import { updatePlayer } from '../store/actions/playersActions';
import PlayerDetails from '../PlayerDetails';

class PlayerView extends Component {
    constructor(props) {
        super(props);
    }

    _levelUpHandler (instance) {
        let { params, players, updatePlayer } = instance.props;
        let playerId = parseInt(params.playerId, 10);
        let { level, gear, name } = players[playerId];

        if (level <= 9) {
            updatePlayer({
                index: playerId,
                data: {
                    level: level + 1, gear, name
                }
            })
        }
    }

    _levelDownHandler (instance) {
        let { params, players, updatePlayer } = instance.props;
        let playerId = parseInt(params.playerId, 10);
        let { level, gear, name } = players[playerId];

        if (level > 1) {
            updatePlayer({
                index: playerId,
                data: {
                    level: level - 1, gear, name
                }
            })
        }
    }

    _gearUpHandler (instance) {
        let { params, players, updatePlayer } = instance.props;
        let playerId = parseInt(params.playerId, 10);
        let { level, gear, name } = players[playerId];

        updatePlayer({
            index: playerId,
            data: {
                gear: gear + 1, level, name
            }
        })
    }

    _gearDownHandler (instance) {
        let { params, players, updatePlayer } = instance.props;
        let playerId = parseInt(params.playerId, 10);
        let { level, gear, name } = players[playerId];

        if (gear > 1) {
            updatePlayer({
                index: playerId,
                data: {
                    gear: gear - 1, level, name
                }
            })
        }
    }

    _changeTitleHandler (instance, event) {
        let { params, players, updatePlayer } = instance.props;
        let playerId = parseInt(params.playerId, 10);
        let { level, gear, name } = players[playerId];

        updatePlayer({
            index: playerId,
            data: {
                name: event.target.value, gear, level
            }
        })
    }

    render () {
        let { params, players } = this.props;
        let key = params.playerId;
        let events = {
            reference: this,
            levelUp: this._levelUpHandler,
            levelDown: this._levelDownHandler,
            gearUp: this._gearUpHandler,
            gearDown: this._gearDownHandler,
            changeTitle: this._changeTitleHandler
        }

        return (
            <PlayerDetails
                events={ events }
                playerName={ players[key].name }
                playerLevel={ players[key].level }
                playerGear={ players[key].gear } />
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayerView);



